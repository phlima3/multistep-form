interface StepProps {
  step: number;
  title: string;
  description: string;
  isActive: boolean;
}

export const Step = ({ description, isActive, step, title }: StepProps) => {
  return (
    <div className="flex gap-6 items-center ">
      <div
        className={
          isActive
            ? "flex items-center w-8 h-8 bg-light-blue justify-center rounded-full"
            : "flex items-center w-8 h-8 bg-none border-2 border-white justify-center rounded-full"
        }
      >
        <span
          className={
            isActive
              ? "font-semibold text-center text-dark-blue"
              : "font-semibold text-center text-white"
          }
        >
          {step}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-sm font-normal text-light-gray">{title}</div>
        <div className="text-base font-semibold tracking-wide text-magnolia">
          {description}
        </div>
      </div>
    </div>
  );
};
