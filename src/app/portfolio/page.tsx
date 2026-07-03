import Cotntent from "@/components/content";
import Portfolio from "@/features/portfolio/portfolio";
import Image from "next/image";
import Link from "next/link";

export interface PortFolio {
  readonly id: number;
  img: string;
  url: string;
  title: string;
  type: string;
}

type PortFolioListType = PortFolio[];

function PortFolio() {
  const portfolios: PortFolioListType = [
    {
      id: 1,
      img: "/images/smartAdviceWeb.png",
      url: "https://smart-advice-web.vercel.app/",
      title: "Smart Advice App",
      type: "Application",
    },
    {
      id: 2,
      img: "/images/musician.png",
      url: "https://sobhanjaferi.github.io/musician/",
      title: "Musician",
      type: "Application",
    },
    {
      id: 3,
      img: "/images/digikala.png",
      url: "https://digikala-clone-gilt.vercel.app/",
      title: "Digikala Clone",
      type: "Application",
    },
  ];

  return (
    <Cotntent title="Portfolio">
      <div className="w-full flex flex-col justify-start items-center gap-5">
        {portfolios.map((portfolio) => (
          <Portfolio key={portfolio.id} {...portfolio} />
        ))}
      </div>
    </Cotntent>
  );
}

export default PortFolio;
