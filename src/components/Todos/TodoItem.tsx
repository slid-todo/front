interface TodoItemProps {
  title: string;
  goal: string;
}

export const TodoItem = (props: TodoItemProps) => {
  const { title, goal } = props;

  return (
    <div className="rounded border p-2">
      <div>제목: {title}</div>
      <div>목표: {goal}</div>
    </div>
  );
};
