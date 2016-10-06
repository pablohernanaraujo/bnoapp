import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.email)) {
    errors.email = 'Este campo es requerido';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email es invalido';
  }
  if (Validator.isNull(data.password)) {
    errors.password = 'Este campo es requerido';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
