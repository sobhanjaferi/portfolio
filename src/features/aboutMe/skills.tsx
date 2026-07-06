import IconButton from "@/components/iconButton";
import { FaGitAlt, FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5, SiManjaro, SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { SiReactquery } from "react-icons/si";

function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">Skills</h2>

      <div className="w-full flex justify-start items-center gap-3 overflow-x-auto pb-4 scrollbar-thumb-white/10">
        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-orange-600">
          <SiHtml5 />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-cyan-600">
          <IoLogoCss3 />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-amber-400">
          <FaJsSquare />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-cyan-600">
          <FaReact />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-cyan-300">
          <RiTailwindCssFill />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-black">
          <SiNextdotjs />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-cyan-700">
          <SiTypescript />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-orange-600">
          <FaGitAlt />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[50px] text-black">
          <FaSquareGithub />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[45px] text-emerald-500">
          <SiManjaro />
        </IconButton>

        <IconButton className="min-w-30 h-30 rounded-lg bg-white/7 text-[45px] text-red-500">
          <SiReactquery />
        </IconButton>
      </div>
    </section>
  );
}

export default Skills;
