import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { TodoItem } from './TodoItem';

interface Todo {
  id: number;
  title: string;
  goal: string;
  status: string;
  createdAt: Date;
}

interface TodoListProps {
  inProgressTasks: Todo[];
  completedTasks: Todo[];
}

export const TodoList = (props: TodoListProps) => {
  const { inProgressTasks, completedTasks } = props;
  return (
    <div>
      <div className="mt-4">
        <h2 className="flex justify-between text-lg font-bold">
          진행 중 ({inProgressTasks.length}){' '}
          <div className="flex cursor-pointer items-center">
            <FaPlus /> 할 일 추가
          </div>
        </h2>
        {inProgressTasks.length > 0 ? (
          <div className="mt-2 space-y-2">
            {inProgressTasks.map((task) => (
              <TodoItem key={task.id} {...task} />
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">
            현재 진행중인 목표가 없습니다.
          </p>
        )}
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-bold">완료 ({completedTasks.length})</h2>
        {completedTasks.length > 0 ? (
          <div className="mt-2 space-y-2">
            {completedTasks.map((task) => (
              <TodoItem key={task.id} {...task} />
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">
            현재 완료된 목표가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};
