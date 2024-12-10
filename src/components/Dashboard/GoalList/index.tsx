import { GoalItem } from './GoalItem';

export interface TodoTypes {
  id: string;
  name: string;
}

interface GoalTypes {
  id: number;
  name: string;
  todos: TodoTypes[];
}

interface GoalListProps {
  goals: GoalTypes[];
}

export const GoalList = ({ goals }: GoalListProps) => {
  return (
    <>
      <p className="text-xl-semibold">목표 별 할 일</p>
      {goals.map((goal) => (
        <GoalItem key={goal.id} name={goal.name} todos={goal.todos} />
      ))}
    </>
  );
};
