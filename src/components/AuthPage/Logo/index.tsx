import { GiSeatedMouse } from 'react-icons/gi';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'} className="flex-center h-89 w-270 px-12 py-20 ">
      <GiSeatedMouse className="size-150 cursor-pointer" />
    </Link>
  );
};
