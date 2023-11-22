import React from 'react';
import '../Input.scss';

type PropTypes = {
  name: string;
  value: string;
  placeholderText: string;
  errors: { [index: string]: string };
  validateAttributes?: { [index: string]: string | boolean | number };
  onChange: React.ChangeEventHandler;
};

const TextArea: React.FC<PropTypes> = ({
  name,
  value,
  placeholderText,
  errors,
  validateAttributes,
  onChange
}) => {
  return (
    <label htmlFor={name} className="input input_type_textarea feedback__form-textarea">
      <textarea
        id={name}
        name={name}
        value={value}
        className="input__element input__element_type_textarea"
        placeholder={placeholderText}
        onChange={onChange}
        {...validateAttributes}
      />
      <span className="input__placeholder">{placeholderText}</span>
      <span className="input__error" aria-live="polite">
        {errors[name]}
      </span>
    </label>
  );
};

export default TextArea;
