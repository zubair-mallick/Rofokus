import React from "react";
import { motion } from "framer-motion"
import { IoIosArrowRoundForward } from "react-icons/io";



const Card = ({ width, start, para,hover, header, title }) => {
  return (
    <motion.div
      whileHover={{ padding: "25px" }}
      className={`bg-zinc-800 p-[2vh] rounded-[.6vw] ${width} min-h-[80vh] flex flex-col justify-between ${
        hover ? "hover:bg-violet-500" : ""} `}
    >
      <div className="w-full">
        <div className="w-full text-[1.3vw] flex justify-between items-center">
          <h3>{header}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-[2.3vw] font-medium mt-[3vh]">{title}</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-[4.6vw] font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className=" text-[1.3vw] rounded-full mt-[5vh] py-[2vh] px-[2vh] border-[.3vh] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-[1vw] text-zinc-400 font-regular">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
