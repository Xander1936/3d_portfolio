import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import threejsSvg from "../../assets/tech/threejs.svg?raw";

const threejsTexture = `data:image/svg+xml,${encodeURIComponent(
  threejsSvg.replace('fill="none"', 'fill="#000"')
)}`;

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas
            icon={technology.name === "Three JS" ? threejsTexture : technology.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
