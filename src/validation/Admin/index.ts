import * as Yup from "yup";

export const CreateParkAdmin = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  address: Yup.string().required("Campo obrigatório"),
  state: Yup.string().required("Campo obrigatório"),
  period: Yup.string().required("Campo obrigatório"),
  price: Yup.string().required("Campo obrigatório"),
});
