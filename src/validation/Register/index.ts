import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("Obrigatório"),
  password: Yup.string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Obrigatório"),
});
