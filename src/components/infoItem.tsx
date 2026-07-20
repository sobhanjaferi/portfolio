import { ComponentProps, ReactNode } from "react";
import IconButton from "./iconButton";
import { IconType } from "react-icons";

type Props = ComponentProps<"section"> & {
  icon: IconType;
  title: string;
  info: string;
  iconSize: number;
  type: "email" | "tel" | "text";
};

function InfoItem({
  icon: Icon,
  info,
  title,
  className,
  iconSize,
  type,
  ...otherProps
}: Props): ReactNode {
  return (
    <section
      className={`flex justify-start items-center gap-3 sm:gap-6 w-full`}
      {...otherProps}
    >
      <IconButton
        className={`bg-white/5 addShadow rounded-lg w-8 sm:w-11 h-8 sm:h-11 text-amber-300/90 ${className}`}
      >
        <Icon size={iconSize} />
      </IconButton>
      <div className="min-h-full w-full flex flex-col justify-center items-start">
        <p className="text-white/40 text-sm">{title.toUpperCase()}</p>

        <input
          type={type}
          value={info}
          readOnly
          className="text-sm sm:text-lg focus:outline-0 w-full"
        />
      </div>
    </section>
  );
}

export default InfoItem;
