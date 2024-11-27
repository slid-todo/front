import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';

export const TOAST_VARIANTS = {
  success: {
    style: 'bg-green-50 border-1 border-gray-200/10',
    icon: FaCheckCircle,
  },
  error: {
    style: 'bg-error text-white',
    icon: FaTimesCircle,
  },
  info: {
    style: 'bg-gray-40 text-white',
    icon: FaInfoCircle,
  },
} as const;
