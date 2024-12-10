interface ProgressLineProps {
  percent: number;
}

export const ProgressLine = ({ percent }: ProgressLineProps) => {
  return (
    <div className="mt-8 flex w-full items-center gap-8 p-2">
      <div className="h-12 w-full rounded-full bg-custom-white-200">
        <div className="h-12 w-200 rounded-full bg-sub-purple" />
      </div>
      <p className="text-sm-semibold text-sub-purple">{percent}%</p>
    </div>
  );
};
