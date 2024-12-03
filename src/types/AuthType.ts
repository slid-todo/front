export interface AuthDataType {
  name?: string;
  email: string;
  password: string;
  passwordChk?: string;
}

export type AuthType = '로그인' | '회원가입';
