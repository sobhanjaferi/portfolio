import IconButton from "@/components/iconButton";
import Image from "next/image";
import { ComponentProps, RefObject } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = ComponentProps<"dialog"> & {
  ref: RefObject<HTMLDialogElement | null>;
};

function PictureModal({ ref, ...otherProps }: Props) {
  const handleClosePictureModal = (): void => {
    ref.current?.close();
  };

  return (
    <dialog
      ref={ref}
      {...otherProps}
      className="rounded-3xl outline-0 m-auto backdrop:backdrop-blur-sm relative"
    >
      <Image
        src={"/images/profile.jpeg"}
        alt="profile img"
        width={200}
        height={200}
        className="rounded-3xl sm:w-100 sm:h-100"
      />

      <IconButton
        onClick={handleClosePictureModal}
        className="absolute top-3 left-3 text-5xl focus:outline-0"
      >
        <IoIosCloseCircleOutline />
      </IconButton>
    </dialog>
  );
}

export default PictureModal;
