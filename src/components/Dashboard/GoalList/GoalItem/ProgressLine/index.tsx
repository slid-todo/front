interface ProgressLineProps {
  percent: number;
  color: string;
}

export const ProgressLine = ({ percent, color }: ProgressLineProps) => {
  return (
    <div className="mt-8 flex w-full items-center gap-8 p-2">
      <div className="h-12 w-full rounded-full bg-custom-white-200">
        <div
          className="h-12 rounded-full"
          style={{ width: `${Math.floor(percent)}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-sm-semibold" style={{ color: color }}>
        {Math.floor(percent).toLocaleString()}%
      </p>
    </div>
  );
};
