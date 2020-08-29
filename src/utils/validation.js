import * as Yup from "yup"

export const ContactScheme = Yup.object({
  full_name: Yup.string().required("Required").min(4, "have at least 4 chars"),
  email: Yup.string().required("Required").email("Invalid Email"),
  phone_number: Yup.string()
    .required("Required")
    .min(8, "have at least 8 chars"),
  company: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
})
