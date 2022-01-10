import * as Yup from 'yup';

import { ERROR_MESSAGES } from 'vy/constants/errors';

export const definePasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, ERROR_MESSAGES.invalidPassword)
    .max(16, ERROR_MESSAGES.invalidPassword)
    .required(ERROR_MESSAGES.requiredField)
    .oneOf([Yup.ref('confirmPassword'), null], ERROR_MESSAGES.passwordNotMatch),
  confirmPassword: Yup.string()
    .min(6, ERROR_MESSAGES.invalidPassword)
    .max(16, ERROR_MESSAGES.invalidPassword)
    .required(ERROR_MESSAGES.requiredField)
    .oneOf([Yup.ref('password'), null], ERROR_MESSAGES.passwordNotMatch),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required(ERROR_MESSAGES.requiredField).email(ERROR_MESSAGES.invalidEmail),
  password: Yup.string().required(ERROR_MESSAGES.requiredField),
});

export const emailValidationSchema = Yup.object().shape({
  email: Yup.string().required(ERROR_MESSAGES.requiredField).email(ERROR_MESSAGES.invalidEmail),
});
