type Props = {
  Height: number;
};

function TimeLineStep({ Height }: Props) {
  return (
    <>
      <div className={`bg-white/10 w-0.5 h-${Height}`}></div>

      <div className="p-1.5 rounded-full bg-white/7">
        <div className="p-1.5 bg-amber-300 rounded-full"></div>
      </div>
    </>
  );
}

export default TimeLineStep;
