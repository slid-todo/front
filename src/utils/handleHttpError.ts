import { AxiosError } from 'axios';

import { notify } from '@/store/useToastStore';

export function handleHttpError(error: unknown) {
  if (!(error instanceof AxiosError)) {
    notify('error', '에러가 발생했습니다.', 3000);
    return;
  }

  const status = error.response?.status;
  const message = error.response?.data?.message || '';

  switch (status) {
    case 401:
      notify('info', '로그아웃 되었습니다.', 3000);
      break;
    case 500:
      notify('error', '서버에서 오류가 발생하였습니다.', 3000);
      break;
    default:
      notify('error', message, 3000);
      break;
  }
}
