import speaker from "../images/speaker.jpeg";
import rgit from "../images/rgit.jpeg";
import elctroviz from "../images/elctroviz.jpeg";
import git from "../images/gits.jpeg";
import hacktober from "../images/hactoberfest.jpeg";
import nic from "../images/nic.jpeg";
export const AcheivementsandExp = () => {
  return (
    <section className="w-full  bg-[#03050a]">
      <div className="w-[1240px] h-full mx-auto pt-40">
        <h3 className="text-4xl   leading-4 text-[#79e9a2] font-sans  font-semibold uppercase text-start ">
          Achievements & Experinces
        </h3>
        {/* Speaker */}
        <div className="w-full h-auto mt-10">
          <h1 className="poppins-regular  text-4xl text-white mb-[2rem]">
            Speaker
          </h1>
          <div className="w-8 h-1 bg-gray-500"></div>
          <div className="w-full flex  justify-between">
            {/* left */}
            <div className="w-[30%]  flex flex-col gap-2">
              <img src={speaker} className="w-[350px] rounded-sm" alt="" />
              <button className="w-[200px]  h-10 border-[1px] border-[#79e9a2] text-[#79e9a2] rounded-sm p-3 poppins-regular text-center leading-[1rem] text-lg ">
                <a href="https://www.linkedin.com/posts/prathamesh-kamble19_csi-git-tech-activity-7127158817624104961-xFN6?utm_source=share&utm_medium=member_desktop">
                  View Post
                </a>
              </button>
            </div>

            {/* right */}
            <div className="w-[68%] flex flex-col gap-4 ">
              <h2 className="text-white text-3xl font-semibold">
                GitHub Hands on Session for Second and third year Students of
                DMCE
                <span className="text-xl poppins-thin-italic ml-[10px]">
                  09/10/2023
                </span>
              </h2>
              <p className="text-white text-lg opacity-70 ">
                Hosting a hands-on workshop on Git-GitHub for students. The
                workshop was aimed at preparing them for Hacktoberfest, an
                open-source festival held every October where participants can
                contribute to projects in both coding and non-coding capacities.
                The attendees, primarily second and third-year students, were
                eager to learn. We covered topics such as an introduction to
                Hacktoberfest, Git-GitHub basics and commands, and how to make
                pull requests to contribute. It was an exciting and rewarding
                experience!
              </p>
            </div>
          </div>
        </div>

        {/* Hackthon */}
        <div className="w-full h-auto mt-12 p-2">
          <h1 className="poppins-regular  text-4xl text-white mb-[1rem] ">
            Hackthons:Team Brewing JS
          </h1>
          <div className="w-full flex justify-start gap-x-10 ">
            {/* 1st div */}
            <div className="w-[40%] flex flex-col justify-between">
              {/* left */}
              <div className="w-full  flex flex-col gap-2">
                <img
                  src={rgit}
                  className="w-[400px] rounded-sm border-[2px] border-gray-300"
                  alt=""
                />
              </div>

              {/* right */}
              <div className="w-full flex flex-col gap-4  ">
                <h2 className="text-white text-xl font-semibold opacity-80 max-w-[400px] ">
                  {/* Recursion National Level Hackathon Winner at Rajiv Gandhi
                  Institute of Technology, Mumbai */}
                  1st Position,Reccursion RGIT,Andheri,Mumbai
                  <span className="text-xl poppins-thin-italic ml-[10px]">
                    13&14/03/2024
                  </span>
                </h2>
                <p className="text-white text-md opacity-70 max-w-[400px] text-justify ">
                  Team Brewing JavaScript won Recursion 5.0 at Rajiv Gandhi
                  Institute of Technology, topping 130 teams. Our solution for
                  the Multimodal Travel Planner included image recognition,
                  text-based search, hotel recommendations, and nearby
                  attractions suggestions, delivering a seamless travel
                  experience.
                </p>
                <button className="w-[200px]  h-8 border-[1px] border-[#79e9a2] text-[#79e9a2] rounded-sm p-3 poppins-regular text-center leading-[0.5rem] text-lg ">
                  <a href="https://www.linkedin.com/posts/prathamesh-kamble19_csi-git-tech-activity-7127158817624104961-xFN6?utm_source=share&utm_medium=member_desktop">
                    View Post
                  </a>
                </button>
              </div>
            </div>
            {/* 2nd div */}
            <div className="w-[40%] flex flex-col justify-between">
              <div className="w-full  flex flex-col gap-2">
                <img
                  src={elctroviz}
                  className="w-[400px] rounded-sm border-[2px] border-gray-300"
                  alt=""
                />
              </div>

              <div className="w-full flex flex-col gap-4  ">
                <h2 className="text-white text-xl font-semibold opacity-80 max-w-[400px] ">
                  {/* Recursion National Level Hackathon Winner at Rajiv Gandhi
                  Institute of Technology, Mumbai */}
                  1st Position,Electroviz,DMCE,Airoli,Navi Mumbai
                  <span className="text-xl poppins-thin-italic ml-[10px]">
                    04/04/2024
                  </span>
                </h2>
                <p className="text-white text-md opacity-70 max-w-[400px] text-justify ">
                  Team Brewing JavaScript has clinched the coveted first prize
                  at Electrowiz - National Level Project Presentation! Our
                  brainchild, CampusConnect, stole the show in the fiercely
                  competitive software category.
                </p>
                <button className="w-[200px]  h-8 border-[1px] border-[#79e9a2] text-[#79e9a2] rounded-sm p-3 poppins-regular text-center leading-[0.5rem] text-lg ">
                  <a href="https://www.linkedin.com/posts/prathamesh-kamble19_drumroll-please-breaking-news-folks-activity-7193887215934959617-NHbP?utm_source=share&utm_medium=member_desktop">
                    View Post
                  </a>
                </button>
              </div>
            </div>
            {/* 3rd div */}
            <div className="w-[40%] flex flex-col justify-between">
              {/* left */}
              <div className="w-full  flex flex-col gap-2">
                <img
                  src={git}
                  className="w-[400px] rounded-sm border-[2px] border-gray-300"
                  alt=""
                />
              </div>

              {/* right */}
              <div className="w-full flex flex-col gap-4  ">
                <h2 className="text-white text-xl font-semibold opacity-80 max-w-[400px] ">
                  {/* Recursion National Level Hackathon Winner at Rajiv Gandhi
                  Institute of Technology, Mumbai */}
                  Participate in Multiple Hackthons
                  <span className="text-xl poppins-thin-italic ml-[10px]"></span>
                </h2>
                <p className="text-white text-md opacity-70 max-w-[400px] text-justify ">
                  March was a whirlwind of innovation as my team conquered two
                  hackathons. At Hacksparrow, we crafted an On Voice Command
                  News Website for the visually impaired. Simultaneously, at
                  Hackathon 2.0, we revolutionized college placements with an
                  Interactive Platform. Together, team Brewing JavaScript turned
                  challenges into impactful solutions, pushing boundaries and
                  shaping a limitless future.
                </p>
                <button className="w-[200px]  h-8 border-[1px] border-[#79e9a2] text-[#79e9a2] rounded-sm p-3 poppins-regular text-center leading-[0.5rem] text-lg ">
                  <a href="https://www.linkedin.com/posts/prathamesh-kamble19_hackathonheroes-innovation-hackathon-activity-7193884496558014464-0OCF?utm_source=share&utm_medium=member_desktop">
                    View Post
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* contribution */}
        <div className="w-full h-auto mt-20">
          <h1 className="poppins-regular  text-4xl text-white mb-[2rem]">
            Contribution
          </h1>
          {/* <div className="w-8 h-1 bg-gray-500"></div> */}
          <div className="w-full flex  justify-between">
            {/* left */}
            <div className="w-[30%]  flex flex-col gap-2">
              <img src={hacktober} className="w-[350px] rounded-sm" alt="" />
              <button className="w-[200px]  h-10 border-[1px] border-[#79e9a2] text-[#79e9a2] rounded-sm p-3 poppins-regular text-center leading-[1rem] text-lg ">
                <a href="https://www.linkedin.com/posts/prathamesh-kamble19_hacktoberfest-opensourcemagic-codeforgood-activity-7127829161603121153-7eHR?utm_source=share&utm_medium=member_desktop">
                  View Post
                </a>
              </button>
            </div>

            {/* right */}
            <div className="w-[68%] flex flex-col gap-4 ">
              <h2 className="text-white text-3xl font-semibold">
                Hacktoberfest 2023: Impactful Contributions
                <span className="text-xl poppins-thin-italic ml-[10px]">
                  October
                </span>
              </h2>
              <p className="text-white text-lg opacity-70 ">
                Hacktoberfest 2023, I made four significant Pull Requests,
                showcasing the collaborative power of coding. My first PR ranked
                among the top 50,000 contributors globally, underscoring the
                reach of open-source development. Notably, Tree Nation honored
                my dedication by planting a tree in Tanzania. For my efforts, I
                received a DIGITAL REWARD KIT and HOLOPIN AVATAR, recognizing
                the hours invested in the open-source community.
              </p>
            </div>
          </div>
        </div>
        {/* social experince */}
        <div className="w-full h-auto mt-20">
          <h1 className="poppins-regular  text-4xl text-white mb-[2rem]">
            NSS:National Level Camp
          </h1>
          {/* <div className="w-8 h-1 bg-gray-500"></div> */}
          <div className="w-full flex  justify-between">
            {/* left */}
            <div className="w-[30%]  flex flex-col gap-2">
              <img src={nic} className="w-[350px] rounded-sm" alt="" />
              <button className="w-[200px]  h-10 border-[1px] border-[#79e9a2] text-[#79e9a2] rounded-sm p-3 poppins-regular text-center leading-[1rem] text-lg ">
                <a href="https://www.linkedin.com/posts/prathamesh-kamble19_nationalintegration-culturaldiversity-maharashtrapride-activity-7126872678656790528-WmQ1?utm_source=share&utm_medium=member_desktop">
                  View Post
                </a>
              </button>
            </div>

            {/* right */}
            <div className="w-[68%] flex flex-col gap-4 ">
              <h2 className="text-white text-3xl font-semibold">
                National Integration Camp,Haryana
                <span className="text-xl poppins-thin-italic ml-[10px]">
                  July-2023
                </span>
              </h2>
              <p className="text-white text-lg opacity-70 ">
                I had the honor of representing Maharashtra at the National
                Integration Camp, hosted at Chaudhary Charan Singh Haryana
                Agriculture University. our group of seven volunteers proudly
                represented our state. The camp, featuring 16 states, celebrated
                cultural diversity through traditional performances and
                activities. It was also a platform for personal growth, with
                inspirational speeches and engaging competitions. The camp
                fostered deep connections among volunteers from different
                states, enriching the experience further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// #03050a
