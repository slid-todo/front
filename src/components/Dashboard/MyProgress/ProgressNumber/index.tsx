'use client';

import { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

export function ProgressNumber({
  progressPercent,
}: {
  progressPercent: number;
}) {
  const spring = useSpring(0, {
    mass: 0.3,
    stiffness: 40,
    damping: 8,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(progressPercent);
  }, [spring, progressPercent]);

  return (
    <p className="absolute text-3xl-bold text-primary-100">
      <motion.span>{display}</motion.span>
      <span className="pb-4 text-base-medium">%</span>
    </p>
  );
}
