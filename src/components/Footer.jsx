import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-[80vw] mx-auto py-[8vh] flex gap-[8vw]">
        <div className="basis-1/2">
          <h1 className="text-[10vw] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 text-[1.5vw] flex gap-[1vw]">
          <div className="basis-1/3">
            <h4 className="mb-[7.6vh] text-zinc-500">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block text-[1.3vw] mt-[.8vh] text-zinc-600"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-[7.6vh] text-[1.5vw] text-zinc-500">Sitemaps</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className=" text-[1.1vw] block mt-[.8vh] text-zinc-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className=" basis-2/3  flex flex-col items-end">
            <p className="text-right text-[1.3vw]">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
              className="w-[50%] px-[.7vw] py-[1vh] mt-[5vh] bg-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
