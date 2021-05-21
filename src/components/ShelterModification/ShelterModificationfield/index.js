// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import '../shelterModification.scss';

// == Component
/**
 * 
 * @param {Array} 
 */
const ShelterModificationField = ({
  name,
  label,
  id,
  type,
  value,
  accept,
  placeholder,
  required,
  pattern,
  manageChange,
}) => {
  const handleChange = (evt) => {
    if (type === 'file') {
      manageChange(evt.target.files[0], id);
    }
    else {
      manageChange(evt.target.value, id);
    }
  };

  return (
    <div className={`field field-${name}`}>
      <label htmlFor={id}>{label} :
        <input
          id={id}
          type={type}
          value={value}
          required={required === 'true'}
          pattern={pattern}
          accept={accept}
          placeholder={placeholder !== '' ? placeholder : label}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

// == PropTypes validation
ShelterModificationField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  accept: PropTypes.string,
  pattern: PropTypes.string,
  manageChange: PropTypes.func.isRequired,
};

ShelterModificationField.defaultProps = {
  type: 'text',
  required: false,
  pattern: '',
  accept: '',
};

// == Export
export default ShelterModificationField;
