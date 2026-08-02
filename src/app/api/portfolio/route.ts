import { NextResponse } from "next/server";

export interface PortFolio {
  readonly id: number;
  img: string;
  url: string;
  title: string;
  type: string;
}

export type PortFolioListType = PortFolio[];

const portfolios: PortFolioListType = [
  {
    id: 1,
    img: "/images/sneakers.png",
    url: "https://sneakers-self-mu.vercel.app/",
    title: "Sneakers shop",
    type: "Application",
  },
  {
    id: 2,
    img: "/images/smartAdviceWeb.png",
    url: "https://smart-advice-web.vercel.app/",
    title: "Smart Advice App",
    type: "Application",
  },
  {
    id: 3,
    img: "/images/musician.png",
    url: "https://sobhanjaferi.github.io/musician/",
    title: "Musician",
    type: "Application",
  },
  {
    id: 4,
    img: "/images/digikala.png",
    url: "https://digikala-clone-gilt.vercel.app/",
    title: "Digikala Clone",
    type: "Application",
  },
];

export async function GET(): Promise<Response> {
  return new NextResponse(JSON.stringify(portfolios), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
