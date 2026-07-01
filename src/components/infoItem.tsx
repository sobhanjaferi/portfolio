import { ComponentProps, ReactNode } from "react";
import IconButton from "./iconButton";

type Props = ComponentProps<"section"> & {
  icon: string;
  title: string;
  info: string;
};

function InfoItem({
  icon,
  info,
  title,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <section
      className={`flex justify-start items-center gap-3 sm:gap-6 w-full`}
      {...otherProps}
    >
      <IconButton className="w-10 sm:w-12 h-10 sm:h-12 text-amber-300">
        {icon}
      </IconButton>

      <div className="min-h-full flex flex-col justify-center items-start">
        <p className="text-white/40 text-sm">{title}</p>

        <p className="text-sm sm:text-lg">{info}</p>
      </div>
    </section>
  );
}

export default InfoItem;
