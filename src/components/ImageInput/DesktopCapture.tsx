import { useRef } from 'react';
import Webcam from 'react-webcam';

export const DesktopCapture = () => {
  const webcamRef = useRef<Webcam>(null);

  //해당 파일은 현재 구현만 한 상태이고, 추후 17일 이후 데스크탑 직접적으로 구현할 때 사용할 예정입니다.

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log('Captured Image:', imageSrc);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">React Webcam</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        className="border border-gray-300"
      />
      <button
        onClick={capture}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        사진 캡처
      </button>
    </div>
  );
};
