"use client";

import InfoItem from "@/components/infoItem";
import PictureModal from "@/modal/pictureModal";
import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import IconButton from "@/components/iconButton";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

function Header(): ReactNode {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const pictureRef = useRef<HTMLDialogElement | null>(null);

  const handleClickOpenMenu = (): void => {
    setIsOpenMenu((old) => !old);
  };

  useEffect(() => {
    const handleMenu = async () => {
      const menu: string | null = await localStorage.getItem("menu");

      if (menu !== null) {
        setIsOpenMenu(JSON.parse(menu));
      }
    };

    handleMenu();
  }, []);

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(isOpenMenu));
  }, [isOpenMenu]);

  const handleOpenPictureModal = (): void => {
    pictureRef.current?.showModal();
  };

  return (
    <div
      className={`h-28.5 sm:min-h-46 bg-white/7 p-3 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-start items-start gap-4 sm:gap-7 addShadow relative addTransition ${isOpenMenu && "h-90 sm:h-125 xl:h-95"}`}
    >
      <PictureModal ref={pictureRef} />

      <section
        className={`w-full flex justify-start items-center gap-4 sm:gap-7 addTransition pb-3 sm:pb-7 border-b border-white/0 ${isOpenMenu && "border-white/25"}`}
      >
        <Image
          src={"/images/profile.jpeg"}
          alt="profile img"
          width={80}
          height={80}
          quality={100}
          className={`w-22 sm:w-31 h-22 sm:h-31 rounded-2xl sm:rounded-4xl active:opacity-30 cursor-pointer`}
          onClick={handleOpenPictureModal}
        />

        <section
          className="flex justify-center items-center gap-2 py-2 px-2.5 absolute top-0 right-0 cursor-pointer rounded-bl-2xl rounded-tr-2xl text-amber-300 active:opacity-30 bg-white/7 addShadow"
          onClick={handleClickOpenMenu}
        >
          <p className="hidden text-[13px] sm:inline">Show Contacts</p>

          <FaAngleDown
            className={`addTransition ${isOpenMenu && "rotate-180"}`}
          />
        </section>

        <div className="flex flex-col justify-between items-start gap-3">
          <h1 className="text-xl sm:text-2xl">Sobhan Jafari</h1>

          <p className="p-1 px-2 bg-white/7 rounded-lg text-[10px] sm:text-[12px] text-center">
            Front end Developer
          </p>
        </div>
      </section>

      <section
        className={`w-full flex flex-col xl:flex-row justify-start xl:justify-evenly items-start gap-3 border-b border-white/0 pb-4 sm:pb-7 ${!isOpenMenu ? "opacity-0 -z-10 transition-all duration-500 ease-in-out" : "transition-all duration-3000 ease-in-out border-white/25"}`}
      >
        <InfoItem
          icon={MdOutlineMail}
          iconSize={23}
          info="sobhanjafarii87@gmail.com"
          title="email"
          type="email"
        />

        <InfoItem
          icon={FiPhone}
          iconSize={23}
          info="+98 993 916 0928"
          title="phone"
          type="tel"
        />

        <InfoItem
          icon={IoLocationOutline}
          iconSize={23}
          info="Alborz , Karaj , Meshkindasht"
          title="location"
          type="text"
        />
      </section>

      <section
        className={` w-full flex justify-start items-center gap-1 ${!isOpenMenu ? "opacity-0 -z-10 transition-all duration-500 ease-in-out" : "transition-all duration-3000 ease-in-out"}`}
      >
        <IconButton>
          <Link
            href={"https://www.linkedin.com/in/sobhan-jafari-681301396/"}
            target="_blank"
          >
            <FaLinkedin className="text-white/35" size={23} />
          </Link>
        </IconButton>

        <IconButton>
          <Link href={"https://github.com/sobhanjaferi"} target="_blank">
            <FaGithub className="text-white/35" size={23} />
          </Link>
        </IconButton>

        <IconButton>
          <Link href={"https://mail.google.com/mail"} target="_blank">
            <FaGoogle className="text-white/35" size={23} />
          </Link>
        </IconButton>

        <IconButton>
          <Link href={"https://web.telegram.org/@sot837"} target="_blank">
            <BsTelegram className="text-white/35" size={23} />
          </Link>
        </IconButton>
      </section>
    </div>
  );
}

export default Header;
