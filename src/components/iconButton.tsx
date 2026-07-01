import React, { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  children: React.ReactNode;
};

function IconButton({ children, className, ...otherProps }: Props) {
  return (
    <button
      {...otherProps}
      className={`bg-white/7 addShadow p-2 rounded-lg cursor-pointer active:opacity-30 flex justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
