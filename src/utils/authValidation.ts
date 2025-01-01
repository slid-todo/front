import { UseFormGetValues } from 'react-hook-form';
import { AuthDataRequest } from '@/types/Auth/AuthDataRequest';
import { ChangePasswordRequest } from '@/types/Auth/ChangePasswordRequest';

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
    value: 4,
    message: '비밀번호는 최소 4자 이상이어야 합니다.',
  },
};

export interface PasswordChkValidationProps {
  getValues?: UseFormGetValues<AuthDataRequest>;
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

export interface NewPasswordValidationProps {
  getValues?: UseFormGetValues<ChangePasswordRequest>;
}

export const newPasswordValidation = ({
  getValues,
}: NewPasswordValidationProps) => {
  return {
    required: '새 비밀번호를 입력해주세요',
    minLength: {
      value: 4,
      message: '비밀번호는 최소 4자 이상이어야 합니다.',
    },
    validate: {
      matchesPassword: (value: string | undefined) =>
        value !== getValues?.('currentPassword') ||
        '현재 비밀번호와 동일합니다.',
    },
  };
};

export interface NewPasswordChkValidationProps {
  getValues?: UseFormGetValues<ChangePasswordRequest>;
}

export const newPasswordChkValidation = ({
  getValues,
}: NewPasswordValidationProps) => {
  return {
    required: '새 비밀번호를 다시 입력해주세요',
    validate: {
      matchesPassword: (value: string | undefined) =>
        value === getValues?.('newPassword') || '비밀번호가 일치하지 않습니다.',
    },
  };
};
