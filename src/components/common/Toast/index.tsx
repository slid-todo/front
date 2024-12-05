import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'motion/react';
import { useToastStore } from '@/store/useToastStore';
import { cn } from '@/utils/className';

import ToastError from '@/assets/lotties/ToastError.json';
import ToastSuccess from '@/assets/lotties/ToastSuccess.json';
import ToastInfo from '@/assets/lotties/ToastInfo.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

/**
 * 알림 메시지를 표시하는 Toast 컴포넌트.
 *
 * 이 컴포넌트는 `useToastStore`를 통해 글로벌 토스트 상태를 구독하고,
 * `type`, `message`, `isVisible` 상태에 따라 토스트 메시지를 화면에 표시합니다.
 *
 * 각 토스트 타입(`success`, `error`, `info`)에 따라 스타일과 아이콘이 변경되며,
 * 내부에서 해당 정보를 결정합니다.
 *
 * `framer-motion` 라이브러리의 `AnimatePresence`와 `motion.div`를 사용하여
 * 토스트의 등장 및 퇴장 시 애니메이션 효과를 제공합니다.
 *
 * 토스트는 `createPortal`을 사용하여 `document.body`에 렌더링되며,
 * 화면의 중앙 상단에 고정됩니다.
 *
 * @example
 * // 토스트 표시하기
 * notify('success', '작업이 성공적으로 완료되었습니다!', 3000);
 *
 * @returns {JSX.Element} 렌더링된 토스트 컴포넌트 또는 빈 `<div />` 요소.
 */

export const Toast = () => {
  const { type, message, isVisible, hideToast } = useToastStore();

  if (!isVisible || !message || !type) return <div />;

  // 스타일과 아이콘을 내부에서 결정
  let style = '';
  let iconData = null;

  switch (type) {
    case 'success':
      style = 'bg-blue-400';
      iconData = ToastSuccess;
      break;
    case 'error':
      style = 'bg-red-500';
      iconData = ToastError;
      break;
    case 'info':
      style = 'bg-slate-700';
      iconData = ToastInfo;
      break;
    default:
      style = 'bg-gray-500';
      break;
  }

  // cn 함수를 사용하여 클래스명 생성
  const ToastClassName = cn(
    'fixed left-1/2 top-20 z-50 flex h-44 -translate-x-1/2 items-center gap-6 rounded-[16px] px-14 py-8 text-sm-medium shadow-lg',
    style,
  );

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={type}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={ToastClassName}
          onClick={() => {
            hideToast();
          }}
        >
          {iconData && <Lottie animationData={iconData} className="size-20" />}
          <span className="text-white">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
