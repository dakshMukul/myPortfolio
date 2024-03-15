import React from "react";
import { textVariant } from "../utils/motion";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";

function TechComponent() {
  return (
    <div className="hidden sm:block my-4">
      <div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-5 text-center">
          Technologies I am familiar with
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-5 bg-gray-300 rounded-full">
        {technologies.map((technology) => (
          <div className="w-12 h-12" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechComponent;
