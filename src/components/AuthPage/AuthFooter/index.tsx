import Link from 'next/link';
import { AuthType } from '@/types/Auth/AuthType';

interface AuthFooterProps {
  description: string;
  linkToDescription: AuthType;
  linkTo: string;
}

export const AuthFooter = ({
  description,
  linkToDescription,
  linkTo,
}: AuthFooterProps) => {
  return (
    <div className="flex items-start gap-4">
      <span className="text-sm-medium text-slate-800">{description}</span>
      <Link className="text-sm-medium text-blue-500 underline" href={linkTo}>
        {linkToDescription}
      </Link>
    </div>
  );
};
