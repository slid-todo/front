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
    <div className="flex min-h-screen w-screen flex-col gap-16 bg-custom-white-100 p-16 md:px-200 xl:px-400 2xl:px-650">
      <TodosDetailHeader todoId={todoId} />
      <TodosDetailContent todoId={todoId} />
    </div>
  );
}
