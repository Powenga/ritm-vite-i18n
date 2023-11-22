import { PATTERN_EMAIL } from '../../utils/constants';

export const INPUT_NAME_ATTRIBUTES = {
  minLength: 2,
  maxLength: 40,
  required: true
};

export const INPUT_EMAIL_ATTRIBUTES = {
  pattern: PATTERN_EMAIL,
  required: true
};

export enum InputNames {
  USER_NAME = 'userName',
  USER_PHONE = 'userPhone',
  USER_EMAIL = 'userEmail',
  USER_MESSAGE = 'userMessage',
  POLICY = 'policy'
}
