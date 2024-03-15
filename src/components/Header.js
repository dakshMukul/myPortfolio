import { coverPic, dp, verify } from "../assets";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative">
      {/* Cover Picture */}
      <div className="cover w-full h-[25vh] sm:h-[40vh] overflow-hidden">
        <img
          src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
          alt="Cover"
        />
      </div>
      {/* Profile Picture */}
      <div className="profile-picture absolute top-[16vh] sm:top-[28vh] left-[20%] sm:left-[20%] md:left-[15%]  transform -translate-x-1/2 border-4 border-black rounded-full w-32 h-32 sm:w-36 sm:h-36 overflow-hidden">
        <img src={dp} alt="Profile Picture" />
      </div>
      {/* Follow Button */}
      <button className="follow-button absolute top-[28vh] sm:top-[45vh]  right-[8%] bg-pink-400 rounded-full px-2">
        Follow
        <i className="fab fa-linkedin m-2"></i>
      </button>

      {/* Profile Detail */}
      <div className="profile-detail-container mt-[10vh] sm:mt-[12vh] sm:w-[85%] m-auto px-3 sm:px-0  m:py-5">
        <div className="relative text-sm sm:text-base flex flex-col gap-1 mb-2 ">
          <h1 className="text-3xl font-bold">
            Mukul Singh
            <motion.div
              className="absolute top-0 left-48 w-6 h-6"
              animate={{ x: [0, 100, 0] }}
            >
              <img src={verify} />
            </motion.div>
          </h1>
          <p>Brings ideas to life with code! ✨</p>
          <p className="">
            A dedicated front-end developer. AWS Certified Cloud practitioner.
            Creative Developer.
          </p>
        </div>
        <div className="text-sm py-4">
          <ul className="flex flex-wrap gap-2 sm:gap-4">
            <li>
              <i class="fa-solid fa-briefcase m-1"></i>
              Available
            </li>
            <li>
              <i class="fa-solid fa-link m-1"></i>
              Links
            </li>
            <li>
              <i class="fa-regular fa-calendar-days m-1"></i>
              Joined March 2024
            </li>
            <li>
              <i class="fa-solid fa-cake-candles m-1"></i>
              March 28th
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
