import { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  title: string;
};

function Cotntent({ children, title, className, ...otherProps }: Props) {
  return (
    <section
      className={`w-full p-3 sm:p-7 bg-white/7 rounded-2xl border border-white/10 ${className}`}
      {...otherProps}
    >
      <h1 className="text-2xl font-bold w-fit border-b-2 border-amber-300">
        {title}
      </h1>

      <br />

      {children}
    </section>
  );
}

export default Cotntent;
