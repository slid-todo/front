const TodoModalTarget = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-base-semibold text-slate-800">목표</span>
      <input
        className="flex flex-col items-start gap-10 self-stretch rounded-12 bg-slate-50 px-20 py-12"
        placeholder="목표를 선택해주세요"
      />
    </div>
  );
};
export default TodoModalTarget;
