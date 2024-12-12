import { UseFormGetValues } from 'react-hook-form';
import { AuthDataType } from '@/types/AuthType';

export const nameValidation = {
  required: '이름을 입력해주세요.',
  pattern: {
    value: /^[a-zA-Z가-힣\s]+$/,
    message: '이름은 알파벳과 한글, 공백만 포함할 수 있습니다.',
  },
};

export const emailValidation = {
  required: '이메일을 입력해주세요.',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: '올바른 이메일 형식을 입력해주세요.',
  },
};

export const passwordValidation = {
  required: '비밀번호를 입력해주세요.',
  minLength: {
    value: 6,
    message: '비밀번호는 최소 6자 이상이어야 합니다.',
  },
};

export interface PasswordChkValidationProps {
  getValues?: UseFormGetValues<AuthDataType>;
}

export const passwordChkValidation = ({
  getValues,
}: PasswordChkValidationProps) => {
  return {
    required: '비밀번호를 입력해주세요.',
    validate: {
      matchesPassword: (value: string | undefined) =>
        getValues && value === getValues('password')
          ? true
          : '비밀번호가 일치하지 않습니다.',
    },
  };
};
