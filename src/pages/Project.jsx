import data from "../projectData";
import { ProjectCard } from "../components/ProjectCard";

export const Project = () => {
  return (
    <section className="w-full bg-[#03050a] flex flex-col justify-center pt-[5rem] gap-y-[5rem]">
      <div className="w-10/12 max-w-maxContent mx-auto ">
      <h3 className="text-3xl md:text-4xl text-[#55e6a5] font-sans  font-semibold uppercase text-start  ">
         Projects
        </h3>
        <div className=" h-auto flex flex-col md:flex-row items-center md:justify-evenly md:items-center mt-[4rem] flex-wrap gap-[2rem] mx-auto ">
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
