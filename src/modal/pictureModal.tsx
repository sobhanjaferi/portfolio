import Image from "next/image";
import { ComponentProps, MouseEvent, RefObject } from "react";

type Props = ComponentProps<"dialog"> & {
  ref: RefObject<HTMLDialogElement | null>;
  imgUrl: string;
};

function PictureModal({ ref, imgUrl, ...otherProps }: Props) {
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
        src={imgUrl}
        alt="profile img"
        width={1080}
        height={1080}
        className="rounded-3xl sm:w-100 sm:h-100"
      />
    </dialog>
  );
}

export default PictureModal;
