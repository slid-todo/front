import { BasicTodoItem } from './BasicTodoItem';

export interface TodoProfileProps {
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
    <BasicTodoItem
      goalColor={goalColor}
      goalTitle={goalTitle}
      todoTitle={todoTitle}
    />
  );
};
