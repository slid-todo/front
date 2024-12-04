import { PLACEHOLDERS } from '@/constants/Placeholders';
import { Input } from '@/components/common/Input';

export const LinkUpload = () => {
  return <Input type="url" placeholder={PLACEHOLDERS.LINK_INPUT} />;
};
