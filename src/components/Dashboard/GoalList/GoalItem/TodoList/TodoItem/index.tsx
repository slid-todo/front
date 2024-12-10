interface TodoItemProps {
  index: number;
}

export const TodoItem = ({ index }: TodoItemProps) => {
  return (
    <div className="flex-center aspect-square rounded-16 bg-sub-purple">
      {index + 1}
    </div>
  );
};
