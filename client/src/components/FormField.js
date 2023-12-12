import React from 'react';

const FormField = ({ name, label, value, onChange, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FormField;
