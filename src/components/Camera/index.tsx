'use client';

import React, { useEffect, useRef, useState } from 'react';

const Camera: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
          setIsCameraOn(true);
        }
      } catch (err) {
        console.error('카메라 접근 실패:', err);
      }
    };
    startCamera();
  }, []);

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    const data = canvas.toDataURL('image/png');

    setImageData(data);
    console.log('Captured Image Data:', data);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">카메라 촬영</h2>
      {isCameraOn ? (
        <video
          ref={videoRef}
          className="w-full max-w-md border border-gray-300"
          autoPlay
          playsInline
        />
      ) : (
        <p>카메라 접근 중...</p>
      )}
      <canvas ref={canvasRef} className="hidden" />

      <button
        onClick={capturePhoto}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        사진 캡처
      </button>

      {imageData && (
        <div className="flex flex-col items-center space-y-2">
          <img
            src={imageData}
            alt="Captured"
            className="max-w-md border border-gray-300"
          />
          <p className="max-w-md break-all text-sm text-gray-500">
            콘솔에서 이미지 Base64 데이터를 확인할 수 있습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default Camera;
