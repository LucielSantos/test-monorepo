export const ERRORS = {
  invalidEmail: 'invalidEmail',
  requiredField: 'required',
  passwordNotMatch: 'passwordNotMatch',
  invalidPassword: 'invalidPassword',
  invalidFormat: 'invalidFormat',
  invalidCnpj: 'invalidCnpj',
  invalidDateBiggerThan: 'invalidDateBiggerThan',
  invalidDateBiggerThanCurrentDate: 'invalidDateBiggerThanCurrentDate',
  invalidCpf: 'invalidCpf',
  minBiggerMax: 'minBiggerMax',
  maxLowerMin: 'maxLowerMin',
  oneOf: 'oneOf',
  minOneOperation: 'minOneOperation',
  minOneProduct: 'minOneProduct',
}

export const ERROR_MESSAGES: Record<keyof typeof ERRORS, string> = {
  invalidEmail: 'E-mail inválido',
  invalidPassword: 'Senha inválida',
  requiredField: 'Campo obrigatório',
  invalidCnpj: 'CNPJ Inválido',
  invalidCpf: 'CPF inválido',
  invalidDateBiggerThan: '',
  invalidDateBiggerThanCurrentDate: '',
  invalidFormat: '',
  maxLowerMin: '',
  minBiggerMax: '',
  minOneOperation: '',
  minOneProduct: '',
  oneOf: '',
  passwordNotMatch: ''
}