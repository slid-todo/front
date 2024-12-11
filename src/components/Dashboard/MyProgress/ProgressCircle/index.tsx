'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const ProgressCircle = ({
  progressPercent,
}: {
  progressPercent: number;
}) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(progressPercent);
  }, [progressPercent]);

  return (
    <figure>
      <svg
        width="166"
        height="166"
        viewBox="0 0 100 100"
        className="size-166 text-current"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          strokeWidth="15"
          stroke="currentColor"
          fill="none"
          className="text-custom-white-200"
        />
        {percent > 0 && (
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="15"
            stroke="currentColor"
            fill="none"
            className="text-primary-100"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: percent / 100 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: 'rotate(-90deg) scaleY(-1)',
              transformOrigin: '50% 50%',
            }}
          />
        )}
      </svg>
    </figure>
  );
};
