import Image from "next/image";
import ProfileGrid from "./profile_grid";
import { VelocityScroll } from "../ui/scroll-based-velocity";
import { MagicCard } from "../ui/magic-card";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

import { useTheme } from "next-themes";
import { Meteors } from "../meteors";
// import { OrbitingCircles } from "../magicui/orbiting-circles";
import OribitingSkillsCircles from "./oribitingSkillsCircles";
import { DownloadIcon, EyeIcon } from "lucide-react";

export default function BentoGrid() {
  const { theme } = useTheme();
  return (
    <div className="grid gap-10">
      {/* first col */}
      <div className="grid sm:grid-cols-3 gap-10">
        <div className=" sm:col-span-2 dark:bg-background/5 rounded-3xl">
          <ProfileGrid />
        </div>
        {/* <MagicCard
          className="cursor-pointer flex flex-col items-center justify-center overflow-hidden"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        > */}
        <div className="card_bg flex flex-col items-center justify-center overflow-hidden">
          <div className="flex rounded-3xl items-center">
            <Meteors number={30} />
            <Image
              src="/_DSC8303.png"
              //  src="/bg1.png"
              alt="profile image"
              width="250"
              height="400"
              className=" scale-125 opacity-80"
            />
          </div>
        </div>

        {/* </MagicCard> */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
      {/* second col */}
      <div className="grid sm:grid-cols-6 gap-10">
        <div className="grid sm:col-span-2 sm:grid-rows-4 gap-4 w-full">
          <div className="dark:bg-background/5  card_bg rounded-full flex items-center justify-center overflow-hidden ">
            <VelocityScroll className=" uppercase">
              <i className=" font-thin"> Personal </i>
              <b>portfolio ⭐ </b>
            </VelocityScroll>
          </div>
          <div className="dark:bg-background/5  card_bg rounded-full flex items-center justify-between px-10 py-4 overflow-hidden ">
            <div className="flex flex-col uppercase">
              <span className=" opacity-50">2025 cv</span>
              <h1 className=" font-bold text-2xl">Resume</h1>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/your-linkedin-username/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium"
              >
                <EyeIcon />
              </a>

              <a href="">
                <DownloadIcon />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:row-span-3  gap-8">
            <div className="dark:bg-background/5 rounded-3xl p-4 card_bg">
              <Image src={``} width={100} height={100} alt="cover" />
              <h2 className="text-sm font-normal uppercase opacity-50">
                More about me
              </h2>
              <h1 className=" text-lg font-medium">Credentials</h1>
            </div>
            <div className="dark:bg-background/5 rounded-3xl p-4 card_bg">
              <Image src={``} width={100} height={100} alt="cover" />
              <h2 className="text-sm font-normal uppercase opacity-50">
                Showcase
              </h2>
              <h1 className=" text-lg font-medium">Projects</h1>
            </div>
          </div>
        </div>
        <div className=" sm:col-span-4">
          {/* <MagicCard
            className="cursor-pointer flex flex-col items-center justify-center overflow-hidden"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          > */}
          <div className="card_bg">
            <div className="grid sm:grid-cols-5 p-10 gap-6">
              <div className="grid col-span-2 gap-4">
                <span>I am Constently try to improve myself</span>
                <h1 className=" text-5xl font-semibold">
                  Currently I Am Using
                </h1>
                <p className=" opacity-50 ">
                  {" "}
                  i am also learning D3.js. other than that , i also constenly
                  pratice web design.
                </p>
              </div>
              {/* skills column */}
              <div className="col-span-3">
                <div>
                  <OribitingSkillsCircles />
                </div>
              </div>
            </div>
          </div>
          {/* </MagicCard> */}
        </div>
      </div>
    </div>
  );
}
