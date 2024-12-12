import { UseFormRegister, UseFormGetValues, FieldError } from 'react-hook-form';
import { AuthDataRequest } from './AuthDataRequest';

export interface AuthInputProps {
  register: UseFormRegister<AuthDataRequest>;
  error?: FieldError;
  getValues?: UseFormGetValues<AuthDataRequest>;
}
