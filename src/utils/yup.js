/* eslint-disable no-unused-vars */
import * as yup from 'yup'
import {
  EMAIL_REQUIRED,
  EMAIL_VALID,
  PASSWORD_REQUIRED,
  PASSWORD_LENGTH,
  FIRST_NAME_REQUIRED,
  LAST_NAME_REQUIRED,
} from './errorMessages'

const email = yup
  .string()
  .trim()
  .required(EMAIL_REQUIRED)
  .email(EMAIL_VALID)

const password = yup
  .string()
  .required(PASSWORD_REQUIRED)
  .min(6, PASSWORD_LENGTH)

const firstName = yup
  .string()
  .trim()
  .required(FIRST_NAME_REQUIRED)

const lastName = yup
  .string()
  .trim()
  .required(LAST_NAME_REQUIRED)
