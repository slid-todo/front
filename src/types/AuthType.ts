export interface SignInDataType {
  email: string;
  password: string;
}

export interface SignUpDataType {
  name: string;
  email: string;
  password: string;
  passwordChk: string;
}

export type AuthType = '로그인' | '회원가입';

export type AuthDataType = SignInDataType | SignUpDataType;
