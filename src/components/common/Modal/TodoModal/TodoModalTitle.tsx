const TodoModalTitle = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch">
      <span className="text-sm-semibold text-slate-800 sm:text-base-semibold">
        제목
      </span>
      <input
        className="flex items-center gap-10 self-stretch rounded-12 bg-slate-50 px-24 py-12"
        placeholder="할 일의 제목을 적어주세요"
      />
    </div>
  );
};

export default TodoModalTitle;
