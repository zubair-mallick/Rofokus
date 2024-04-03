import React from "react";
import Button from "./Button";
function Navbar(props) {
  return (
    <div className="w-[80vw] mx-[10vw] px-[3%] py-[2vh] flex items-center justify-between min-gap-x-[10%] border-b-[.3vh] border-zinc-700   ">
      <div className='nleft flex items-center"'>
        <img
          className="w-[13vw]  self-center  h-[3vh]"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-x-[3.5vw] ml-[10vw]">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => {
            return elem.length === 0 ? (
              <span key={index} className="w-[.2vw] h-[6vh] bg-zinc-800"></span>
            ) : (
              <a
                key={index}
                className="text-[1.2vw] flex items-center gap-[.3vh]"
                href="#"
              >
                {" "}
                {index === 1 && (
                  <span className="shadow-[0_0_0.50em_#00FF19]   inline-block w-[.6vw] rounded-full  h-[.6vw] bg-green-500  "></span>
                )}
                {elem}{" "}
              </a>
            );
          })}
        </div>
      </div>

      <Button></Button>
    </div>
  );
}

export default Navbar;
