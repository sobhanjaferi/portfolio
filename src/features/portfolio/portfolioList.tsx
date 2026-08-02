"use client";

import { PortFolioListType } from "@/app/api/portfolio/route";
import Portfolio from "./portfolio";
import useFetch from "@/hooks/fetchData";
import LoadingComponent from "@/components/loading";

function PortfolioList() {
  const { data: portfolios, isLoading } =
    useFetch<PortFolioListType>("/api/portfolio");

  if (isLoading) return <LoadingComponent />;

  return (
    <div className="w-full flex flex-col justify-start items-center gap-5">
      {portfolios?.map((portfolio) => (
        <Portfolio key={portfolio.id} {...portfolio} />
      ))}
    </div>
  );
}

export default PortfolioList;
