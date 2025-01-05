import { FaListUl } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { TodoProfileProps } from '..';

interface BasicTodoItemProps extends TodoProfileProps {
  todoId?: number;
}

export const BasicTodoItem = ({
  goalColor,
  goalTitle,
  todoTitle,
  todoId,
}: BasicTodoItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (todoId) {
      router.push(`/todos/${todoId}`);
    }
  };

  return (
    <div className="flex items-center gap-16" onClick={handleClick}>
      <div
        className="flex-center my-8 size-56 cursor-pointer rounded-16"
        style={{ backgroundColor: goalColor }}
      >
        <FaListUl fill="white" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs-medium text-custom-gray-100">{goalTitle}</span>
        <span className="text-base-medium">{todoTitle}</span>
      </div>
    </div>
  );
};
