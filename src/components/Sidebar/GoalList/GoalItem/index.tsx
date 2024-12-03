interface GoalItemProps {
  text: string;
}

export const GoalItem = ({ text }: GoalItemProps) => {
  return (
    <div className="flex items-center gap-16 px-8 py-12">
      {/* TODO: 랜덤 색상으로 변경 */}
      <div className="size-16 shrink-0 rounded-full bg-primary-200" />
      <span className="text-sm-medium">{text}</span>
    </div>
  );
};
