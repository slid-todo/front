import { UseFormRegister, UseFormGetValues, FieldError } from 'react-hook-form';

export interface AuthDataType {
  name?: string;
  email: string;
  password: string;
  passwordChk?: string;
}

export interface AuthInputProps {
  register: UseFormRegister<AuthDataType>;
  error?: FieldError;
  getValues?: UseFormGetValues<AuthDataType>;
}

export type AuthType = '로그인' | '회원가입';
