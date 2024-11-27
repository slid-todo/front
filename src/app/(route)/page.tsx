import HeartIcon from '@/assets/icon-heart.svg';
import TodoModal from '@/components/common/Modal/TodoModal';

export default function Home() {
  return (
    <div>
      <button className="size-100">안녕asdfasfd</button>
      <HeartIcon width="32" height="32" fill="#FF0000" />
      <TodoModal />
    </div>
  );
}
