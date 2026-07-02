import IconButton from "@/components/iconButton";
import { ReactNode } from "react";
import { FaGitAlt, FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5, SiManjaro, SiNextdotjs, SiTypescript } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";

function Content(): ReactNode {
  return (
    <section className="w-full p-3 sm:p-7 bg-white/7 rounded-2xl border border-white/10">
      <h1 className="text-2xl font-bold w-fit border-b-2 border-amber-300">
        About Me
      </h1>

      <br />

      <p className="text-white/70">
        Front-end developer with focus on React and Next.js interested in deep
        learning and implementing modern web development standard. despite not
        having formal work experience , I have real practical projects and a
        strong commitment to code quality, continuous learning , and
        professional and dynamic team and am committed ti contributing
        effectively to the success to projects with all my efforts
      </p>

      <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>

        <div className="w-full flex justify-start items-center gap-3 overflow-x-auto">
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
        </div>
      </section>
    </section>
  );
}

export default Content;
