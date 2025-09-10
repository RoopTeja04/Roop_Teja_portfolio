import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <h1 className="relative text-4xl bottom-12 font-semibold tracking-wider">Technical Skills</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {
          technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");