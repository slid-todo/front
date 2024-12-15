import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef<Webcam>(null);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log('Captured Image:', imageSrc);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">React Webcam으로 카메라 촬영</h2>
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

export default Camera;
