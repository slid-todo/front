interface TodoItemProps {
  index: number;
}

export const TodoPic = ({ index }: TodoItemProps) => {
  return (
    <div className="flex-center aspect-square rounded-16 bg-sub-purple">
      {index + 1}
    </div>
  );
};
