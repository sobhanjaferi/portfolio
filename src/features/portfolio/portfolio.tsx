import { PortFolio } from "@/app/portfolio/page";
import Image from "next/image";
import Link from "next/link";

type Props = Omit<PortFolio, "id">;

function Portfolio({ img, title, type, url }: Props) {
  return (
    <Link href={url} className="w-full">
      <section className="w-full min-h-60 max-h-85 sm:min-h-100 flex flex-col justify-between items-start gap-3">
        <Image
          src={img}
          alt={title}
          width={320}
          height={20}
          className="w-full min-h-45 max-h-65 sm:min-h-85 rounded-xl active:opacity-30"
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
