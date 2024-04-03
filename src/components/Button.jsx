import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  const style = { fontSize: "1.5vw", width: "1vw", hieght: "3vh" };
  return (
    <div className="w-[10vw]  h-[6vh]  px-[1vw] py-[1.5vh] bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-[1vw] font-medium ">{title}</span>

      <IoIosReturnRight style={style} />
    </div>
  );
};

export default Button;
