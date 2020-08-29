import React, { useState } from "react"
import { useFormik } from "formik"
import SuccessUI from "./../UI/SuccessUI"
import { ContactScheme } from "../../utils/validation"
import { expertise } from "./ContactForm"

function Input({ name, handleChange, value, errors, placeholder }) {
  return (
    <div className="form-group-custom">
      <input
        className={`form-control-custom`}
        style={{ borderBottom: errors && "1px solid #F9B93E" }}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <small className="text-warning mt-n4">{errors}</small>
    </div>
  )
}

export default function GetStarted() {
  const [isNext, setNext] = useState(false)
  const [success, setSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone_number: "",
      company: "",
      services: "",
      message: "",
    },
    onSubmit: values => {
      alert("submitting...")
      let data = {
        full_name: values.full_name,
        email: values.email,
        phone_number: values.phone_number,
        company: values.company,
        services: values.services,
        message: values.message,
      }
      fetch("https://vastloop-contact.herokuapp.com/contact", {
        headers: {
          "Content-Type": "Application/json",
          mode: "no-cors",
        },
        method: "POST",
        body: JSON.stringify(data),
      })
        .then(res => {
          setSuccess(true)
          setTimeout(() => {
            window.location.reload()
          }, 3000)
        })
        .catch(err => {
          alert("Error sending your message")
          console.log(err)
        })
    },
    validationSchema: ContactScheme,
  })

  return success ? (
    <SuccessUI />
  ) : (
    <form
      onSubmit={formik.handleSubmit}
      className="get-started-form"
      data-sal="zoom-in"
      data-sal-delay="2000"
      data-sal-easing="ease"
      data-sal-duration="2000"
    >
      <div className="get-started-input">
        {!isNext ? (
          <Input
            name="full_name"
            placeholder="YOUR NAME"
            handleChange={formik.handleChange}
            value={formik.values.full_name}
            errors={formik.errors.full_name}
          />
        ) : (
          <Input
            name="company"
            placeholder="COMPANY"
            handleChange={formik.handleChange}
            value={formik.values.company}
            errors={formik.errors.company}
          />
        )}
        {!isNext ? (
          <Input
            name="email"
            placeholder="EMAIL ADDRESS"
            handleChange={formik.handleChange}
            value={formik.values.email}
            errors={formik.errors.email}
          />
        ) : (
          <div className="form-group-custom">
            <select name="services" id="service" onChange={formik.handleChange}>
              <option value="none">SERVICES YOU ARE INTERESTED IN</option>
              {expertise.map((service, index) => {
                return (
                  <option key={index} value={service}>
                    {service}
                  </option>
                )
              })}
            </select>
          </div>
        )}
        {!isNext ? (
          <Input
            name="phone_number"
            placeholder="PHONE NUMBER"
            handleChange={formik.handleChange}
            value={formik.values.phone_number}
            errors={formik.errors.phone_number}
          />
        ) : (
          <Input
            name="message"
            placeholder="HOW CAN WE HELP YOU?"
            handleChange={formik.handleChange}
            value={formik.values.message}
            errors={formik.errors.message}
          />
        )}
      </div>
      <div className=" get-started-btn-wrapper">
        <button
          type={isNext ? "submit" : "button"}
          onClick={() => setNext(true)}
          className="get-started-btn"
        >
          {!isNext ? "GET STARTED" : "TELL US MORE"}
        </button>
      </div>
    </form>
  )
}
