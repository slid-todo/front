import { FaCamera } from 'react-icons/fa6';

interface TodoProfileProps {
  goalColor: string | undefined;
  goalTitle: string | undefined;
  todoTitle: string | undefined;
}

export const TodoProfile = ({
  goalColor,
  goalTitle,
  todoTitle,
}: TodoProfileProps) => {
  return (
    <div className="flex items-center gap-16">
      <div
        className="flex-center my-8 size-56 cursor-pointer rounded-16"
        style={{ backgroundColor: goalColor }}
      >
        <FaCamera fill="white" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs-medium text-custom-gray-100">{goalTitle}</span>
        <span className="text-base-medium">{todoTitle}</span>
      </div>
    </div>
  );
};
