import { PageContainer } from '@/components/common/PageContainer';
import { TodosDetailContent } from '@/components/TodosDetail/TodosDetailContent';
import { TodosDetailHeader } from '@/components/TodosDetail/TodosDetailHeader';

interface TodoDetailProps {
  todoId: string;
}

export default async function todoDetail({
  params,
}: {
  params: Promise<TodoDetailProps>;
}) {
  const { todoId } = await params;

  return (
    <PageContainer>
      <TodosDetailHeader todoId={todoId} />
      <TodosDetailContent todoId={todoId} />
    </PageContainer>
  );
}
