import React from "react"
import { useFormik } from "formik"
import { ContactScheme } from "./../../utils/validation"

let expertise = [
  "Brand Strategy Implementation",
  "Website Design & Development",
  "Search Engine Optimization",
  "Social Media Marketing and Ads",
  "Pay Per Click Marketing",
  "E-Commerce Website",
  "Content Marketing",
  "Email Marketing",
]

const FormInput = ({
  name,
  id,
  placeholder,
  type,
  icon,
  label,
  handleChange,
  error,
  value,
  textarea = false,
}) => {
  return (
    <div className="form-wrapper">
      <div className="form-wrapper__control">
        <label htmlFor="full_name">
          <img src={`/${icon}`} alt={`${label} Icon`} />
        </label>
        {textarea ? (
          <textarea
            onChange={handleChange}
            rows={6}
            className={`${error ? "error-input" : null}`}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
          ></textarea>
        ) : (
          <input
            className={`${error ? "error-input" : null}`}
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            onChange={handleChange}
            value={value}
          />
        )}
      </div>
      <div className="text-warning pl-5" style={{ position: "absolute" }}>
        {error}
      </div>
    </div>
  )
}

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      company: "",
      services: "",
      message: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values))
    },
    validationSchema: ContactScheme,
  })

  return (
    <form
      className="contact-form-custom"
      onSubmit={formik.handleSubmit}
      autoComplete="Off"
      data-sal="fade"
      data-sal-delay="0"
      data-sal-easing="ease-out"
      data-sal-duration="1000"
    >
      <input type="hidden" value="something" />
      <FormInput
        name="full_name"
        id="full_name"
        handleChange={formik.handleChange}
        value={formik.values.full_name}
        label="Full Name"
        icon="full_name.svg"
        placeholder="FULL NAME"
        type="text"
        error={formik.errors.full_name}
      />
      <FormInput
        name="email"
        id="email"
        handleChange={formik.handleChange}
        value={formik.values.email}
        label="Email"
        icon="email.svg"
        placeholder="EMAIL ADDRESS"
        type="text"
        error={formik.errors.email}
      />
      <FormInput
        name="company"
        id="company"
        handleChange={formik.handleChange}
        value={formik.values.company}
        label="Company"
        icon="building.svg"
        placeholder="COMPANY"
        type="text"
        error={formik.errors.company}
      />
      <div className="form-wrapper">
        <div className="form-wrapper__control">
          <label htmlFor="full_name">
            <img src={`/services.svg`} alt={`Services Icon`} />
          </label>
          <select name="services" id="service">
            <option value="none">OUR SERVICES</option>
            {expertise.map((service, index) => {
              return (
                <option key={index} value={service}>
                  {service}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      <FormInput
        name="message"
        id="message"
        handleChange={formik.handleChange}
        value={formik.values.message}
        label="Message"
        icon="message.svg"
        placeholder="HOW WE CAN HELP YOU"
        type="text"
        error={formik.errors.message}
        textarea={true}
      />
      <button
        type="submit"
        className="rounded-0 btn btn-warning font-weight-bold btn-block"
      >
        Send a Message
      </button>
    </form>
  )
}
