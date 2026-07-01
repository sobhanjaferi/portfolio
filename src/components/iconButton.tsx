import React, { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  children: React.ReactNode;
};

function IconButton({ children, className, ...otherProps }: Props) {
  return (
    <button
      {...otherProps}
      className={`p-2 cursor-pointer active:opacity-30 flex justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
