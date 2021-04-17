// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import local
import './registerfield.scss';

// == Component
/**
 * Component of a field input for the user registration
 * @param {String} value Value of the input (default = empty)
 * @param {String} type Type of the input (default = text)
 * @param {String} name Name of the input
 * @param {String} placeholder Message display on the placeholder of the input
 * @param {Function} manageChange Function to update the input fields' value
 */
const RegisterField = ({
  value,
  type,
  name,
  placeholder,
  manageChange,
}) => {
  const handleChange = (evt) => {
    manageChange(evt.target.value, name);
  };

  const inputId = `registerfield-${name}`;

  return (
    <div className="registerfield">
      <label
        htmlFor={inputId}
        className="registerfield-label"
      >
        {placeholder}
      </label>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="registerfield-input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

// == PropTypes validation
RegisterField.propTypes = {
  /** text used as value for the input */
  value: PropTypes.string,
  /** type of the input */
  type: PropTypes.string,
  /** text used as name for the input (and also used as id, with a prefix) */
  name: PropTypes.string.isRequired,
  /** text used as placeholder and label */
  placeholder: PropTypes.string.isRequired,
  /** called when onChange event is received by the input, two parameters :
   * - new value
   * - name
   */
  manageChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
RegisterField.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default RegisterField;
