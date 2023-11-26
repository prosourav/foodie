// 

import { Formik, Field, ErrorMessage, Form } from 'formik';
import React from 'react';
import Modal from 'react-modal';
import * as yup from 'yup';
import emailjs from "emailjs-com";

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
  },
};
export default function ContactModal({ open, setIsOpen }) {

  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Name is required').email('Invalid email address'),
    phoneNumber: yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Invalid phone number'),
    query: yup.string().required('Query is required'),
  });

  const initialValues = { name: '', email: '', phoneNumber: '', query: '' };

  function closeModal() {
    setIsOpen(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    // console.log('event: ', values);
    const payload = {
      to_name: 'Sourav',
      user_name: values.name,
      user_email: values.email,
      message: values.query,
      phoneNumber: values.phoneNumber
    };
    emailjs
      .send(
        "service_0sk62tp",
        "template_5zdz1qc",
        payload,
        "user_caagFYsbH7sk7neERYGJ1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetForm();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '16px 0' }}>
              <label htmlFor="name" style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>Name</label>
              <Field type="text" id="name" name="name" style={{
                // width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: '8px',
              }} />
              {errors.name && touched.name ? (
                <div style={{ color: '#f44336', fontSize: '14px', fontWeight: 'normal' }}>{errors.name}</div>
              ) : null}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: '16px 0' }}>
              <label htmlFor="email" style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>Email</label>
              <Field type="email" id="email" name="email" style={{
                // width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: '8px',
              }} />
              {errors.email && touched.email ? (
                <div style={{ color: '#f44336', fontSize: '14px', fontWeight: 'normal' }}>{errors.email}</div>
              ) : null}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: '16px 0' }}>
              <label htmlFor="phoneNumber" style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }} >Phone Number</label>
              <Field type="text" id="phoneNumber" name="phoneNumber" style={{
                // width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginBottom: '8px',
              }} />
              {errors.phoneNumber && touched.phoneNumber ? (
                <div style={{ color: '#f44336', fontSize: '14px', fontWeight: 'normal' }}>{errors.phoneNumber}</div>
              ) : null}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: '16px 0' }}>
              <label htmlFor="query" style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>Query</label>
              <Field as="textarea" id="query" name="query" style={{
                // width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                minHeight: '100px',
              }} />
              {errors.query && touched.query ? (
                <div style={{ color: '#f44336', fontSize: '14px', fontWeight: 'normal' }}>{errors.query}</div>
              ) : null}
            </div>

            <button type="submit" style={{
              backgroundColor: '#2196F3',
              color: '#fff',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '16px',
            }}>
              Submit
            </button>
          </Form>
        )}
      </Formik>


      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <form style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

            <div style={{ display: 'flex', flexDirection: 'column', margin: '16px 0' }}>
              <label htmlFor="email" style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{
                  // width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  marginBottom: '8px',
                }}
              />
              {errors.email && touched.email && (
                <div style={{ color: '#f44336', fontSize: '14px', fontWeight: 'normal' }}>{errors.email}</div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: '16px 0' }}>
              <label htmlFor="phoneNumber" style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>Phone Number</label>
              <Field
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                style={{
                  // width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  marginBottom: '8px',
                }}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <div style={{ color: '#f44336', fontSize: '14px', fontWeight: 'normal' }}>{errors.phoneNumber}</div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: '16px 0' }}>
              <label htmlFor="query" style={{ color: '#333', fontSize: '16px', fontWeight: 'bold' }}>Query</label>
              <Field
                as="textarea"
                id="query"
                name="query"
                style={{
                  // width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  minHeight: '100px',
                }}
              />
              {errors.query && touched.query && (
                <div style={{ color: '#f44336', fontSize: '14px', fontWeight: 'normal' }}>{errors.query}</div>
              )}
            </div>


          </form>
        )}
      </Formik> */}

    </Modal>
  );
}
