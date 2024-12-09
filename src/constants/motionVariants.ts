export const dropdownVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

export const calendarVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

export const todoModalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};
