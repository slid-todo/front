import { UseFormRegister, UseFormGetValues, FieldError } from 'react-hook-form';
import { ChangePasswordRequest } from './ChangePasswordRequest';

export interface ChangePasswordProps {
  register: UseFormRegister<ChangePasswordRequest>;
  getValues?: UseFormGetValues<ChangePasswordRequest>;
  error?: FieldError;
}
