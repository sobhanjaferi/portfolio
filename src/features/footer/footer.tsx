"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  id: number;
  name: string;
  url: string;
};

type Items = [Item, Item, Item];

function Footer() {
  const navItems: Items = [
    {
      id: 1,
      name: "About Me",
      url: "/",
    },
    {
      id: 2,
      name: "Resume",
      url: "/resume",
    },
    {
      id: 3,
      name: "Portfolio",
      url: "/portfolio",
    },
  ];

  const activeItem = usePathname();

  return (
    <ul className="flex justify-center items-center gap-4">
      {navItems.map((item) => (
        <li
          key={item.id}
          className={`${item.url === activeItem && "text-amber-300"}`}
        >
          <Link href={item.url}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Footer;
