import { collection, getDocs, query, where } from "firebase/firestore";

import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { Header, Loading } from "../../../components";
import { IParkCardProps } from "../../../components/ParkCard/types";
import { useAuthContext } from "../../../contexts/Auth";
import { database } from "../../../services/firebase";
import {
  Container,
  Schedule,
  SchedulesContainer,
  SchedulesInfo,
  LoadingContainer,
} from "../../../styles/pages/schedules/styles";
import { ISchedule } from "../../../types/Schedules";

const Schedules = () => {
  const { user } = useAuthContext();
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const theme = useTheme();

  useEffect(() => {
    async function getShechedules() {
      if (user?.user) {
        const q = query(
          collection(database, "schedules"),
          where("user_id", "==", user?.user?.uid)
        );
        const res = await getDocs(q);
        const schedules = res.docs.map(async (doc) => {
          const q = query(
            collection(database, "parks"),
            where("id", "==", doc.data().park_id)
          );

          const res = await getDocs(q);
          const parkResult = res.docs[0].data() as IParkCardProps;

          doc.data() as ISchedule;
          return { ...(doc.data() as ISchedule), park: parkResult };
        });

        const result: ISchedule[] = await Promise.all(schedules);
        setSchedules(result);
      }
    }

    getShechedules();
  }, [user]);

  console.log(schedules);

  const getTotalCost = useMemo(() => {
    const cost = schedules.reduce((acc, schedule) => {
      return acc + schedule.total_value;
    }, 0);

    return cost;
  }, [schedules]);

  const getTotalDays = useMemo(() => {
    const days = schedules.reduce((acc, schedule) => {
      return acc + schedule.total_period_days;
    }, 0);

    return days;
  }, [schedules]);

  return (
    <>
      <Header />
      <Container>
        {schedules.length === 0 ? (
          <LoadingContainer>
            <Loading size={80} color={theme.colors.secondary} />
          </LoadingContainer>
        ) : (
          <>
            <SchedulesInfo>
              <h1>Detalhes</h1>
              <p>
                Número de agendamentos realizados:{" "}
                <strong>{schedules.length}</strong>
              </p>
              <p>
                Gasto total <strong>R$ {getTotalCost}</strong>
              </p>
              <p>
                Dias reservados <strong>{getTotalDays} dias</strong>
              </p>
            </SchedulesInfo>

            <SchedulesContainer>
              <Schedule></Schedule>
            </SchedulesContainer>
          </>
        )}
      </Container>
    </>
  );
};
export default Schedules;
