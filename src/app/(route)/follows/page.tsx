import { Header } from '@/components/common/Header';
import { FollowsContainer } from '@/components/Follows/FollowsContainer';

export default function FollowsPage() {
  return (
    <>
      <Header title="팔로워" search />
      <FollowsContainer />
    </>
  );
}
