import { MdVisibilityOff } from 'react-icons/md';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'} className="flex-center h-89 w-270 px-12 py-20 ">
      <MdVisibilityOff className="size-150 cursor-pointer" />
    </Link>
  );
};
