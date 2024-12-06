import { motion } from 'motion/react';

export const ProgressCircle = ({ progress }: { progress: number }) => {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const currentProgress = Math.floor((progress / 100) * circumference);

  return (
    <figure>
      <svg
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className="size-166 text-current"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          strokeWidth="15"
          stroke="currentColor"
          fill="none"
          className="text-custom-white-100"
        />

        <motion.circle
          cx="50"
          cy="50"
          r="30"
          strokeWidth="15"
          stroke="currentColor"
          fill="none"
          className="text-primary-200"
          strokeDasharray={circumference}
          strokeDashoffset={currentProgress - circumference}
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
    </figure>
  );
};
