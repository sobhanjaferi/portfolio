import { ComponentProps, Suspense } from "react";
import LoadingComponent from "./loading";

type Props = ComponentProps<"section"> & {
  title: string;
};

function Cotntent({ children, title, className, ...otherProps }: Props) {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <section
        className={`w-full p-3 sm:p-7 bg-white/7 rounded-2xl border border-white/10 addTransition ${className}`}
        {...otherProps}
      >
        <h1 className="text-2xl sm:text-3xl font-bold w-fit border-b-2 border-amber-300">
          {title}
        </h1>

        <br />

        {children}
      </section>
    </Suspense>
  );
}

export default Cotntent;
