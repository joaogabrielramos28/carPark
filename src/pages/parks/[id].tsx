import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useCallback, useMemo, useState } from "react";
import { BackButton, Carousel, Header, Loading } from "../../components";
import { IParkCardProps } from "../../components/ParkCard/types";
import { database } from "../../services/firebase";
import {
  Container,
  ParkHeader,
  ParkContent,
  ParkName,
  ParkWrapper,
  ParkPrice,
  ParkPeriod,
  ParkInfo,
  ParkAddress,
  ParkDetails,
  SpotsTypes,
  ScheduleSpot,
  ScheduleButton,
  ScheduleContainer,
  PeriodDate,
  LabelPeriodDate,
  DateWrapper,
  PeriodWrapper,
  TotalWrapper,
  TotalInfo,
  Total,
} from "../../styles/pages/parks/singlePark/styles";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";
import { useTheme } from "styled-components";
import { FaCarSide, FaTruck } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { checkSpot } from "../../utils/checkSpot";
import { AiFillClockCircle } from "react-icons/ai";
import { differenceInDays } from "date-fns";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useAuthContext } from "../../contexts/Auth";
import { toastMessage } from "../../utils/toast";

interface ParkProps {
  park: IParkCardProps;
}

const Park = ({ park }: ParkProps) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const theme = useTheme();
  const { user } = useAuthContext();
  const [loadingScheduleSubmit, setLoadingScheduleSubmit] = useState(false);

  const totalperiodDays = useMemo(() => {
    return differenceInDays(dateRange?.to!, dateRange?.from!);
  }, [dateRange]);

  const totalValue = useMemo(() => {
    return totalperiodDays === 0 ? park.price : totalperiodDays * park.price;
  }, [totalperiodDays, park.price]);

  const fromDateFormatted = useMemo(() => {
    return dateRange?.from?.toLocaleDateString("pt-BR");
  }, [dateRange]);

  const toDateFormatted = useMemo(() => {
    return dateRange?.to?.toLocaleDateString("pt-BR");
  }, [dateRange]);

  const formatData = useCallback(() => {
    const fromJSX = (
      <DateWrapper>
        <LabelPeriodDate>De</LabelPeriodDate>
        {fromDateFormatted}
      </DateWrapper>
    );

    const toJSX = (
      <DateWrapper>
        <LabelPeriodDate>Até</LabelPeriodDate>
        {toDateFormatted}
      </DateWrapper>
    );

    if (fromDateFormatted && toDateFormatted) {
      return (
        <PeriodWrapper>
          <p>Você selecionou</p>
          <PeriodDate>
            <br /> {fromJSX}{" "}
            <HiOutlineArrowNarrowRight color={theme.colors.text} size={24} />{" "}
            {toJSX}
            <br />
          </PeriodDate>
          Total:
          <TotalWrapper>
            <TotalInfo>
              <strong>{totalperiodDays}</strong> dias x R$ {park.price}
            </TotalInfo>
            <Total>R$ {totalValue}</Total>
          </TotalWrapper>
        </PeriodWrapper>
      );
    } else {
      return <PeriodWrapper> Selecione um período!</PeriodWrapper>;
    }
  }, [
    fromDateFormatted,
    toDateFormatted,
    theme.colors.text,
    totalperiodDays,
    park.price,
    totalValue,
  ]);

  const footerDayPicker = dateRange ? (
    <p>{formatData()}</p>
  ) : (
    <PeriodWrapper> Selecione um período!</PeriodWrapper>
  );

  const handleScheduleSpot = useCallback(async () => {
    if (!user) {
      return toastMessage(
        "Você precisa estar logado para realizar a reserva!",
        "warning"
      );
    }
    const schedule = {
      park_id: park.id,
      user_id: user?.user.uid,
      from: fromDateFormatted,
      to: toDateFormatted,
      total_value: totalValue,
      total_period_days: totalperiodDays,
    };
    setLoadingScheduleSubmit(true);
    try {
      await setDoc(doc(database, "schedules", schedule.park_id), schedule);
      toastMessage("Agendamento feito com sucesso!!");
      setLoadingScheduleSubmit(false);
    } catch (err) {
      console.log(err);
      toastMessage("Erro ao criar agendamento", "error");
      setLoadingScheduleSubmit(false);
    }
  }, [
    fromDateFormatted,
    park.id,
    toDateFormatted,
    totalValue,
    totalperiodDays,
    user,
  ]);

  const { spots } = park;
  return (
    <>
      <Header />
      <ParkHeader>
        <BackButton path="/parks" />
      </ParkHeader>

      <Container>
        <ParkWrapper>
          <Carousel images={park.images!} />
          <ParkContent>
            <ParkInfo>
              <ParkName>{park.name}</ParkName>
              <ParkAddress>
                {park.address}, {park.state}{" "}
              </ParkAddress>
            </ParkInfo>
            <ParkPrice>
              R$ {park.price}
              <ParkPeriod>/{park.period}</ParkPeriod>
            </ParkPrice>
          </ParkContent>

          <ParkDetails>
            <SpotsTypes>
              <FaCarSide
                color={checkSpot("car", spots)}
                title="Carro"
                size={24}
              />
              <FaTruck
                color={checkSpot("truck", spots)}
                title="Caminhão"
                size={24}
              />
              <RiMotorbikeFill
                color={checkSpot("bike", spots)}
                title="Moto"
                size={24}
              />
            </SpotsTypes>
          </ParkDetails>
        </ParkWrapper>
        <ScheduleContainer>
          <DayPicker
            defaultMonth={new Date()}
            fromDate={new Date()}
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            locale={ptBR}
            footer={footerDayPicker}
          />
          <ScheduleSpot>
            <ScheduleButton
              onClick={handleScheduleSpot}
              disabled={fromDateFormatted && toDateFormatted ? false : true}
            >
              {loadingScheduleSubmit ? (
                <Loading color="#FFFF" size={36} />
              ) : (
                <>
                  Agendar vaga
                  <AiFillClockCircle color={theme.colors.shape} size={18} />
                </>
              )}
            </ScheduleButton>
          </ScheduleSpot>
        </ScheduleContainer>
      </Container>
    </>
  );
};
export default Park;

export const getStaticPaths: GetStaticPaths = async () => {
  const q = query(collection(database, "parks"));

  const res = await getDocs(q);
  const parksResults = res.docs;

  const paths = parksResults.map((park) => {
    return {
      params: {
        id: park.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const q = query(collection(database, "parks"), where("id", "==", id));
  const res = await getDocs(q);
  const parkResult = res.docs[0].data() as IParkCardProps;

  return {
    props: {
      park: parkResult,
    },
    revalidate: 60 * 30, // 30 min
  };
};
