"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

import styles from "./contactsForm.module.scss";

function ContactsForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_KEY;
    emailjs.init(key);
  }, []);

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Number is not valid")
      .required("Number is required"),
  });

  const sendEmail = async ({ name, phone }) => {
    const serviceId = process.env.NEXT_PUBLIC_SERVICE;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE;

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name,
        phone,
      });
      //   console.log("email successfully sent check inbox");
      setSuccess(true);
    } catch (error) {
      //   console.log(error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      className={styles.form}
      initialValues={{
        name: "",
        phone: "",
      }}
      validationSchema={schema}
      validateOnChange
      validateOnBlur
      onSubmit={(values) => {
        sendEmail(values);
      }}
    >
      <Form className={styles.fields}>
        <div className={styles.inputwrapper}>
          <Field
            name="name"
            className={styles.input}
            id="name"
            placeholder=" "
            autoComplete="on"
          />
          <label className={styles.label} htmlFor="name">
            Nombre
          </label>
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>
        <div className={styles.inputwrapper}>
          <Field
            name="phone"
            className={styles.input}
            id="phone"
            placeholder=" "
            autoComplete="on"
          />
          <label className={styles.label} htmlFor="phone">
            Número telefónico
          </label>
          <ErrorMessage
            name="phone"
            component="span"
            className={styles.error}
          />
        </div>
        {success === null ? (
          loading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="4"
              animationDuration="0.75"
              width="60"
              visible={true}
            />
          ) : (
            <button type="submit" className={styles.button}>
              Compar
            </button>
          )
        ) : success ? (
          <p className={styles.emailsuccess}>Email sent successfuly</p>
        ) : (
          <p className={styles.emailerror}>Error, try again later</p>
        )}
      </Form>
    </Formik>
  );
}

export default ContactsForm;
