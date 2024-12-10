import { FaCamera } from 'react-icons/fa6';

interface TodoItemProps {
  title: string;
  goal: string;
  className?: string;
}

export const TodoItem = (props: TodoItemProps) => {
  const { title, goal, className = '' } = props;

  return (
    <div className={`flex h-72 ${className}`}>
      <div className="flex-center my-8 size-56 rounded-16 bg-sub-purple">
        <FaCamera fill="white" />
      </div>
      <div className="my-14 ml-16">
        <div className="text-xs-medium text-custom-gray-100">{goal}</div>
        <div className="text-base-medium text-custom-gray-300">{title}</div>
      </div>
    </div>
  );
};
