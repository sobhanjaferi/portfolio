import IconButton from "./iconButton";
import TimeLineStep from "./timeLineStep";
import {ReactNode} from "react";

type Props = {
  Icon: ReactNode;
  steps: number;
  lineHeight: 2 | 5 | 8 | 10 | 12 | 15 | 17 | 18 | 22 | 30;
  firstLineHeight?: 2 | 5 | 8 | 10 | 12 | 15 | 17 | 18 | 22 | 30;
};

function TimeLine({ Icon, lineHeight, firstLineHeight, steps }: Props) {
  const stepsArr: number[] = Array.from({ length: steps }, (_, i) => i + 1);

  return (
    <div className="flex flex-col justify-start items-center w-fit">
      <IconButton className="bg-white/5 addShadow rounded-xl w-8 sm:w-11 h-8 sm:h-11 text-amber-300/90">
        {Icon}
      </IconButton>

      {stepsArr.map((step) => {
        if (step == 1 && firstLineHeight) {
          return <TimeLineStep key={step} Height={firstLineHeight} />;
        } else {
          return <TimeLineStep key={step} Height={lineHeight} />;
        }
      })}
    </div>
  );
}

export default TimeLine;
