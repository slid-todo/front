import { FaLink } from 'react-icons/fa';
import { PLACEHOLDERS } from '@/constants/Placeholders';

export const LinkUpload = () => {
  return (
    <div className="flex h-184 w-full shrink-0 items-center justify-center rounded-12 bg-slate-50">
      <div className="inline-flex flex-col items-center justify-center gap-8">
        <FaLink className="size-24 text-slate-400" />
        <span className="text-sm-normal text-slate-400 sm:text-base-normal">
          {PLACEHOLDERS.LINK_ATTACH}
        </span>
        <input
          type="url"
          placeholder={PLACEHOLDERS.LINK_INPUT}
          className="mt-4 w-full max-w-[500px] rounded-8 border px-4 py-2 text-sm text-slate-600 focus:outline-none" // 길이 늘림
        />
      </div>
    </div>
  );
};
