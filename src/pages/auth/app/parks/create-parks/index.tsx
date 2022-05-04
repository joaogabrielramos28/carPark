import { GetServerSideProps } from "next";
import React from "react";
import App from "../..";
import { CheckBoxTypeSpot, Modal, SelectForm } from "../../../../../components";
import { IStatesProps } from "../../../../../components/SelectForm/types";
import { ibgeApi } from "../../../../../services/api";
import {
  Container,
  Title,
  FormContainer,
  InputGroup,
  InputFormPark,
  OpenModalImageButton,
  OpenModalImageWrapper,
  ContainerModal,
  ColumnImages,
  DropZoneWrapper,
  ImageWrapper,
  CheckBoxGroup,
  SubmitWrapper,
  SubmitButton,
  CheckBoxGroupWrapper,
  Label,
  SaveImagesButton,
} from "../../../../../styles/pages/parks/create-parks/styles";

import { IoMdRemove } from "react-icons/io";

import DropzoneComponent from "../../../../../components/Dropzone/Dropzone";
import { useDashboardContext } from "../../../../../contexts/Dashboard";
import Image from "next/image";
import { useTheme } from "styled-components";
import { FaCarSide, FaTruck } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { Field, Form, Formik } from "formik";
import { CreateParkAdmin } from "../../../../../validation/Admin";
import { ICreateParkValues } from "../../../../../contexts/Dashboard/types";
interface ICreateParkProps {
  states: IStatesProps[];
}

const CreateParks = ({ states }: ICreateParkProps) => {
  const {
    imageDropZoneModal,
    selectedImages,
    handleToggleImageDropZoneModal,
    handleDeleteSelectedImage,
    handleCreatePark,
  } = useDashboardContext();
  const theme = useTheme();
  const selected_images = selectedImages.map((file, i) => (
    <ImageWrapper key={i}>
      <IoMdRemove
        color={theme.colors.shape}
        size={24}
        onClick={() => handleDeleteSelectedImage(file.name)}
      />
      <Image src={file.preview} alt="" width={150} height={200} />
    </ImageWrapper>
  ));
  return (
    <>
      <App />

      <Container>
        <Title>Cadastrar Park</Title>
        <Formik
          onSubmit={(values: ICreateParkValues) => handleCreatePark(values)}
          validationSchema={CreateParkAdmin}
          initialValues={{
            name: "",
            address: "",
            state: "",
            period: "",
            price: 0,
          }}
        >
          {({ handleSubmit, values, handleChange, errors }) => (
            <Form onSubmit={handleSubmit}>
              {console.log(errors)}
              <FormContainer>
                <InputFormPark
                  label="Nome"
                  placeholder="Nome do Park"
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                />
              </FormContainer>
              <InputGroup>
                <InputFormPark
                  label="Endereço"
                  placeholder="Endereço do Park"
                  onChange={handleChange}
                  value={values.address}
                  name="address"
                />

                <SelectForm
                  label="Estado"
                  states={states}
                  value={values.state}
                  name="state"
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup>
                <SelectForm
                  label="Periodo"
                  options={["Diário", "Semanal", "Mensal"]}
                  onChange={handleChange}
                  value={values.period}
                  name="period"
                />

                <InputFormPark
                  label="Preço"
                  type="number"
                  placeholder="R$ 99.99"
                  onChange={handleChange}
                  value={values.price}
                  name="price"
                />
              </InputGroup>
              <InputGroup>
                <OpenModalImageButton
                  onClick={handleToggleImageDropZoneModal}
                  type="button"
                >
                  Adicionar imagens
                </OpenModalImageButton>
                <CheckBoxGroupWrapper>
                  <Label>Selecione o tipo de vaga</Label>
                  <CheckBoxGroup>
                    <CheckBoxTypeSpot name="car" icon={FaCarSide} />
                    <CheckBoxTypeSpot name="bike" icon={RiMotorbikeFill} />
                    <CheckBoxTypeSpot name="truck" icon={FaTruck} />
                  </CheckBoxGroup>
                </CheckBoxGroupWrapper>
              </InputGroup>

              <SubmitWrapper>
                <SubmitButton type="submit">Cadastrar</SubmitButton>
              </SubmitWrapper>
              {imageDropZoneModal && (
                <Modal onClose={handleToggleImageDropZoneModal} overlay>
                  <ContainerModal>
                    <ColumnImages>
                      {selected_images.map((image) => image)}
                    </ColumnImages>
                    <DropZoneWrapper>
                      <DropzoneComponent />

                      <SaveImagesButton
                        onClick={handleToggleImageDropZoneModal}
                        disabled={selectedImages.length === 0}
                        type="button"
                      >
                        Salvar Imagens
                      </SaveImagesButton>
                    </DropZoneWrapper>
                  </ContainerModal>
                </Modal>
              )}
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};
export default CreateParks;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await ibgeApi.get<IStatesProps[]>(
    "localidades/estados?orderBy=nome"
  );

  return {
    props: {
      states: response.data,
    },
  };
};
