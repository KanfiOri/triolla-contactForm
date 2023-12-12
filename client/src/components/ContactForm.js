import React, { useState } from 'react';
import FormField from './components/FormField';
import Button from './components/Button';
import dataProvider from './utils/dataProvider';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = 'The field is required';
      }
    });

    if (Object.keys(validationErrors).length === 0) {
      dataProvider.sendData(formData)
        .then((response) => {
          // Handle success response
        })
        .catch((error) => {
          // Handle error
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={handleInputChange}
          error={errors.subject}
        />
        {/* Other form fields (email, phone, message) */}
        <Button type="submit" text="Send Message" />
        <Button text="Cancel" />
      </form>
    </div>
  );
};

export default ContactForm;
