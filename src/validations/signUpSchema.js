import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string().required("Ingresar email.").email("El email no es válido."),
  password: string()
    .required("Ingresar contraseña.")
    .min(6, "La contraseña debe tener más de 6 caracteres."),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas no coinciden.")
    .required(),
});