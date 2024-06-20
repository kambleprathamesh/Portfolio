import data from "../projectData";
import { ProjectCard } from "../components/ProjectCard";

export const Project = () => {
  return (
    <section className="w-full bg-[#03050a] flex flex-col justify-center pt-[5rem] gap-y-[5rem]">
      <div className="w-[1240px] mx-auto ">
        <h3 className="text-4xl   leading-4 text-[#79e9a2] font-sans  font-semibold uppercase text-start ml-[6rem]">
          Projects
        </h3>
        <div className="w-[1240px] h-auto  flex justify-evenly mt-[4rem] flex-wrap gap-[2rem] mx-auto ">
          {data.map((val) => {
            return (
              <div key={val.id}>
                <ProjectCard
                  title={val.title}
                  img={val.img}
                  code={val.code}
                  view={val.viewLink}
                  tech={val.techStack}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
