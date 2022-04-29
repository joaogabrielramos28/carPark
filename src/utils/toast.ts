import { toast } from "react-toastify";

export function toastMessage(message: string, type = "success") {
  switch (message) {
    case "auth/wrong-password":
      message = "Credenciais inválidas";
      break;
    case "auth/user-not-found":
      message = "Usuário não encontrado";
      break;
    case "auth/user-disabled":
      message = "Conta desativada";
      break;
    case "auth/email-already-in-use":
      message = "E-mail já cadastrado";
      break;
    case "auth/invalid-email":
      message = "E-mail inválido";
      break;
    case "auth/too-many-requests":
      message =
        "Sua conta foi bloqueada, devido a muitas tentativas de login. Tente novamente mais tarde";
      break;
    default:
      break;
  }

  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    default:
      break;
  }
}
