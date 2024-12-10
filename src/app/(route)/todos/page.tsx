import { Header } from '@/components/common/Header';
import { TodoContainer } from '@/components/Todos';

export default function DashBoardPage() {
  return (
    <>
      <Header title="모든 할 일" />
      <TodoContainer />
    </>
  );
}
