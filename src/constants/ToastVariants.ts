import ToastError from '@/assets/lotties/ToastError.json';
import ToastSuccess from '@/assets/lotties/ToastSuccess.json';
import ToastInfo from '@/assets/lotties/ToastInfo.json';

export const TOAST_VARIANTS = {
  success: {
    style: 'bg-blue-300',
    icon: ToastError,
  },
  error: {
    style: 'bg-red-500',
    icon: ToastSuccess,
  },
  info: {
    style: 'bg-slate-700',
    icon: ToastInfo,
  },
} as const;
