import Image from "next/image";
import { ComponentProps, MouseEvent, RefObject } from "react";

type Props = ComponentProps<"dialog"> & {
  ref: RefObject<HTMLDialogElement | null>;
};

function PictureModal({ ref, ...otherProps }: Props) {
  const handleClosePictureModal = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.currentTarget == e.target) {
      ref.current?.close();
    }
  };

  return (
    <dialog
      ref={ref}
      {...otherProps}
      className="rounded-3xl outline-0 m-auto backdrop:backdrop-blur-sm relative"
      onClick={handleClosePictureModal}
    >
      <Image
        src={"/images/profile.jpeg"}
        alt="profile img"
        width={200}
        height={200}
        className="rounded-3xl sm:w-100 sm:h-100"
      />
    </dialog>
  );
}

export default PictureModal;
