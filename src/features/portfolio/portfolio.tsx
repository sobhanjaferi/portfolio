import Link from "next/link";
import { PortFolio } from "./portfolioList";

type Props = Omit<PortFolio, "id">;

function Portfolio({ img, title, type, url }: Props) {
  return (
    <Link href={url}>
      <section className=" min-h-60 max-h-85 sm:min-h-100 flex flex-col justify-between items-start gap-3">
        <img
          src={img}
          alt={title}
          className="w-full lg:w-200 min-h-50 max-h-70 sm:min-h-85 rounded-xl active:opacity-30"
        />

        <div>
          <h3>{title}</h3>
          <h4 className="text-white/70">{type}</h4>
        </div>
      </section>
    </Link>
  );
}

export default Portfolio;
