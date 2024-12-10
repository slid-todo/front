import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Todo } from '@/types/Todos';
import { TODO_EMPTY_STATE_MESSAGES } from '@/constants/Todos/TodoMessages';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  inProgressTasks: Todo[];
  completedTasks: Todo[];
}

export const TodoList = (props: TodoListProps) => {
  const { inProgressTasks, completedTasks } = props;

  return (
    <div>
      <div className="">
        <div className="flex justify-between text-xs-bold text-custom-gray-100">
          진행 중 ({inProgressTasks.length})
          <div className="flex cursor-pointer items-center gap-2 text-sm-medium text-primary-100">
            <FaPlus /> 할 일 추가
          </div>
        </div>
        {inProgressTasks.length > 0 ? (
          <div className="mt-12 space-y-2">
            {inProgressTasks.map((task, index) => {
              const isLastItem = index === inProgressTasks.length - 1;
              return (
                <TodoItem
                  key={task.id}
                  {...task}
                  className={
                    isLastItem ? '' : 'border-b border-custom-white-200'
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className="flex h-120 items-center justify-center text-sm-normal text-custom-gray-100">
            {TODO_EMPTY_STATE_MESSAGES.IN_PROGRESS}
          </div>
        )}
      </div>

      <div className="mt-24">
        <div className="flex justify-between text-xs-bold text-custom-gray-100">
          완료 ({completedTasks.length})
        </div>
        {completedTasks.length > 0 ? (
          <div className="mt-12 space-y-2">
            {completedTasks.map((task, index) => {
              const isLastItem = index === completedTasks.length - 1;
              return (
                <TodoItem
                  key={task.id}
                  {...task}
                  className={
                    isLastItem ? '' : 'border-b border-custom-white-200'
                  }
                />
              );
            })}
          </div>
        ) : (
          <div className="flex h-120 items-center justify-center text-sm-normal text-custom-gray-100">
            {TODO_EMPTY_STATE_MESSAGES.IN_PROGRESS}
          </div>
        )}
      </div>
    </div>
  );
};
