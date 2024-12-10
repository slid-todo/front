import { IoReload } from 'react-icons/io5';

export const VerificationNoteImage = () => {
  return (
    <div className="relative flex size-240">
      <div className="size-full rounded-16 bg-fuchsia-400" />
      <button className="flex-center absolute bottom-8 right-8 cursor-pointer gap-4 rounded-170 bg-white px-10 py-6 text-sm-semibold text-primary-200 hover:bg-custom-white-200">
        <IoReload />
        <span>재촬영</span>
      </button>
    </div>
  );
};
