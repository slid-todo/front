import { ReactNode } from 'react';

interface PostGoalProps {
  children: ReactNode;
}

export function PostGoalAndTodo(props: PostGoalProps) {
  const { children } = props;

  return (
    <div className="flex h-72 w-full flex-col gap-8 rounded-8 bg-white p-12">
      <span className="text-sm-semibold text-primary-100">목표</span>
      <span className="text-sm-medium text-custom-gray-300">{children}</span>
    </div>
  );
}
