interface GoalItemProps {
  text: string;
  color: string;
}

export const GoalItem = ({ text, color }: GoalItemProps) => {
  return (
    <div className="flex items-center gap-16 px-8 pb-16 pt-12">
      <div
        className="size-16 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm-medium">{text}</span>
    </div>
  );
};
