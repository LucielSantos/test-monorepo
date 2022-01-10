import * as Yup from "yup";

import { ERROR_MESSAGES } from 'vy/constants/errors'

export const testValidationSchema = Yup.object().shape({
  search: Yup.string().required(ERROR_MESSAGES.requiredField),
});
