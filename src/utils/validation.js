import * as Yup from "yup"

export const ContactScheme = Yup.object({
  full_name: Yup.string().required("Required").min(4, "have at least 4 char"),
  email: Yup.string().required("Required").email("Invalid Email"),
  company: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
})
