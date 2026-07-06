import { ReactNode } from "react";
import Cotntent from "@/components/content";
import Skills from "./skills";

function AboutMe(): ReactNode {
  return (
    <Cotntent title="About Me">
      <p className="text-white/70">
        Front-end developer with focus on React and Next.js interested in deep
        learning and implementing modern web development standard. despite not
        having formal work experience , I have real practical projects and a
        strong commitment to code quality, continuous learning , and
        professional and dynamic team and am committed ti contributing
        effectively to the success to projects with all my efforts
      </p>

      <br />

      <Skills />
    </Cotntent>
  );
}

export default AboutMe;
