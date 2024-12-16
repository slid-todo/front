interface TodoItemProps {
  index: number;
  color: string;
}

export const TodoPic = ({ index, color }: TodoItemProps) => {
  return (
    <div
      className="flex-center aspect-square rounded-16"
      style={{ backgroundColor: color }}
    >
      {index + 1}
    </div>
  );
};
