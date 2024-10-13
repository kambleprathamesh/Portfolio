import data from "../projectData";
import { ProjectCard } from "../components/ProjectCard";
import { useState } from "react";

export const Project = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="w-full bg-[#03050a] flex flex-col justify-center  pt-[3rem] md:pt-[9rem] gap-y-[5rem]">
      <div className="w-10/12 max-w-maxContent mx-auto ">
        <h3 className="text-3xl md:text-4xl text-[#55e6a5] font-sans  font-semibold uppercase text-start  ">
          Projects
        </h3>

        {/* <div>{data.length > 3 ? <button className="bg-white">Show More</button> : ""}</div> */}

        <div>
          {showMore ? (
            <div className=" h-auto flex flex-col md:flex-row items-center md:justify-evenly md:items-center mt-[3rem] flex-wrap gap-[2rem] mx-auto ">
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
          ) : (
            <div className=" h-auto flex flex-col md:flex-row items-center md:justify-evenly md:items-center mt-[3rem] flex-wrap gap-[2rem] mx-auto ">
              {data.slice(0, 3).map((val) => {
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
          )}
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="w-[10rem] h-10 lg:w-[12rem] lg:h-12 bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] p-2 lg:p-4 text-center leading-6 lg:leading-4 text-black text-sm lg:text-lg lg:font-semibold mt-10 rounded-md hover:bg-gradient-to-r hover:from-[#00c6ff] hover:to-[#0072ff] hover:text-white transition-all duration-500 cursor-pointer"
            onClick={handleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};
