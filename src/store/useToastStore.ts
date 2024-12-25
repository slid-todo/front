import { create } from 'zustand';
import { ERROR_MESSAGE } from '@/constants/Messages';

interface ToastState {
  type: 'success' | 'error' | 'info' | null;
  message: string | null;
  duration: number;
  isVisible: boolean;
  timeoutId: NodeJS.Timeout | null;
  showToast: (
    type: 'success' | 'error' | 'info',
    message: string,
    duration?: number,
  ) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  type: null,
  message: null,
  duration: 1000,
  isVisible: false,
  timeoutId: null,
  showToast: (type, message, duration = 1000) => {
    const validDuration = Math.max(1000, duration);

    const { timeoutId } = useToastStore.getState();
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      set({
        isVisible: false,
        message: null,
        type: null,
        timeoutId: null,
      });
    }, validDuration);

    set({
      type,
      message,
      duration: validDuration,
      isVisible: true,
      timeoutId: newTimeoutId,
    });
  },
  hideToast: () => {
    const { timeoutId } = useToastStore.getState();
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    set({
      isVisible: false,
      message: null,
      type: null,
      timeoutId: null,
    });
  },
}));

export const notify = (
  type: 'success' | 'error' | 'info',
  message: string,
  duration?: number,
): void => {
  if (!message?.trim()) {
    console.warn(ERROR_MESSAGE);
    return;
  }

  const trimmedMessage = message.trim().slice(0, 50);

  try {
    useToastStore.getState().showToast(type, trimmedMessage, duration);
  } catch (error) {
    console.error(error);
  }
};
