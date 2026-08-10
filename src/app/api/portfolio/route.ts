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
    type: "web / Application",
  },
  {
    id: 2,
    img: "/images/adminPanel.png",
    url: "https://admin-panel-hpcoqn4vd-sobhans-projects-73ea1f83.vercel.app/",
    title: "Admin Panel",
    type: "web / Application",
  },
  {
    id: 3,
    img: "/images/university.png",
    url: "https://islamic-university-delta.vercel.app/",
    title: "Islamic University",
    type: "web / Application",
  },
  {
    id: 4,
    img: "/images/smartAdviceWeb.png",
    url: "https://smart-advice-web.vercel.app/",
    title: "Smart Advice App",
    type: "web / Application",
  },
  {
    id: 5,
    img: "/images/musician.png",
    url: "https://sobhanjaferi.github.io/musician/",
    title: "Musician",
    type: "web / Application",
  },
  {
    id: 6,
    img: "/images/digikala.png",
    url: "https://digikala-clone-gilt.vercel.app/",
    title: "Digikala Clone",
    type: "web / Application",
  },
];

export async function GET(): Promise<Response> {
  return new NextResponse(JSON.stringify(portfolios), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
