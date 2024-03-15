import { education } from "../constants/index";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div className="mt-10" variants={textVariant()}>
        <h2 className="text-lg font-bold">Education.</h2>
      </motion.div>
      <div className="timeline relative flex flex-col pb-8">
        {education.map((element, index) => {
          return (
            <div key={element.id || index} className="flex m-2 relative">
              <div className="hidden sm:flex items-start w-48 pt-1 relative ">
                <div className="w-full text-gray-500 text-[11px] mt-4">
                  {element.date}
                </div>
                <div className="bg-pink-400 w-px h-full translate-x-5 translate-y-10 opacity-30"></div>
                <img src={element.icon} alt="icon" className="w-10 z-20" />
                <div className="bg-pink-500 h-px w-8 translate-y-5 opacity-30"></div>
              </div>
              <div className="border border-gray-400 rounded-lg px-3 py-4 bg-gray-100 text-center w-full z-10 sm:w-96">
                <div className="text-lg">{element.title}</div>
                <div className="text-gray-500 mb-4 mb-5 text-lg">
                  {element.subtitle}
                  <p className="sm:hidden text-xs">({element.date})</p>
                </div>
                <div className="mb-4 text-left tracking-wider">
                  {element.discription}
                </div>
                <img
                  src={element.icon}
                  alt="icon"
                  className="w-10 p-1 z-2 absolute left-3 top-3 sm:hidden"
                />
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;
