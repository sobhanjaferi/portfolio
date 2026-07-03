import Content from "@/components/content";
import TimeLine from "@/components/timeLine";
import { GrProjects } from "react-icons/gr";
import { IoBookOutline, IoLanguageSharp } from "react-icons/io5";

function Resume() {
  return (
    <Content title="Resume">
      <div className="w-full flex flex-col justify-start items-center gap-10">
        <section className="w-full flex justify-start items-start gap-2">
          <TimeLine
            Icon={<IoBookOutline size={20} />}
            lineHeight={8}
            steps={1}
          />
          <div className="w-full p-1 sm:p-2 flex flex-col justify-start items-start gap-9">
            <h2 className="font-bold sm:text-xl">Education</h2>

            <section>
              <h3 className="border-b w-fit mb-2">
                Aburaihan Biruni High School
              </h3>

              <ol className="list-disc pl-10 text-white/70">
                <li>Computer Network – Grade 12</li>

                <li>September 2014 – Present</li>
              </ol>
            </section>
          </div>
        </section>

        <section className="w-full flex justify-start items-start gap-2">
          <TimeLine Icon={<GrProjects />} lineHeight={8} steps={1} />

          <div className="w-full p-1 sm:p-2 flex flex-col justify-start items-start gap-9">
            <h2 className="font-bold sm:text-xl">Experience</h2>

            <section>
              <h3 className="border-b w-fit mb-2">Aio Learn</h3>

              <ol className="list-disc pl-10 text-white/70 flex flex-col justify-start items-start gap-5">
                <section>
                  <li>Front end Mentor</li>

                  <p className="text-[12px] ml-5">
                    I was a front end mentor at Aio learn I went in the class
                    rooms for mentoring and debugging students code and I liked
                    this job but after 3 months when we wanted to write the
                    Contract the Proposed salary was too low and I disagreed
                    with it for this reason I left Aio learn.
                  </p>
                </section>

                <section>
                  <li>AI Mentor</li>

                  <p className="text-[12px] ml-5">
                    I was a AI mentor at Aio learn I went in the class rooms for
                    mentoring and debugging students code and I liked this job
                    but after 3 months when we wanted to write the Contract the
                    Proposed salary was too low and I disagreed with it for this
                    reason I left Aio learn.
                  </p>
                </section>
              </ol>
            </section>
          </div>
        </section>

        <section className="w-full flex justify-start items-start gap-2">
          <TimeLine Icon={<IoLanguageSharp />} lineHeight={8} steps={1} />

          <div className="w-full p-1 sm:p-2 flex flex-col justify-start items-start gap-9">
            <h2 className="font-bold sm:text-xl">language</h2>

            <section>
              <h3 className="border-b w-fit mb-2">English</h3>

              <ol className="list-disc pl-10 text-white/70 flex flex-col justify-start items-start gap-5">
                <li>experience 3 years | 70%</li>
              </ol>
            </section>
          </div>
        </section>
      </div>
    </Content>
  );
}

export default Resume;
