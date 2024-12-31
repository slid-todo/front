export const TodoRepeat = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <span className="text-base-semibold">기간</span>
      <div className="flex w-full items-center gap-8">
        <div className="flex w-full  justify-center rounded-12 bg-white px-16 py-12 text-sm-medium">
          24.12.13
        </div>
        <span className="text-sm-medium">~</span>
        <div className="flex w-full justify-center rounded-12 bg-white px-16 py-12 text-sm-medium">
          24.12.20
        </div>
      </div>
    </div>
  );
};
