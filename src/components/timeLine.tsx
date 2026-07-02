"use client";

import IconButton from "./iconButton";
import TimeLineStep from "./timeLineStep";

type Props = {
  Icon: React.ReactNode;
  steps: number;
  lineHeight: 2 | 5 | 8 | 10 | 12 | 15 | 17 | 18 | 22 | 30;
};

function TimeLine({ Icon, lineHeight, steps }: Props) {
  const stepsArr: number[] = Array.from({ length: steps }, (_, i) => i + 1);

  return (
    <div className="flex flex-col justify-start items-center w-fit">
      <IconButton className="bg-white/5 addShadow rounded-lg w-10 sm:w-13 h-10 sm:h-13 text-amber-300/90">
        {Icon}
      </IconButton>

      {stepsArr.map((step) => (
        <TimeLineStep key={step} Height={lineHeight} />
      ))}
    </div>
  );
}

export default TimeLine;
