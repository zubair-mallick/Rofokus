import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

function Work(props) {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "68%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "40%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "70%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "55%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showImages(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImages([]);
        break;
      case 4 - 1:
        showImages([0]);
        break;
      case 6 - 1:
        showImages([0, 1]);
        break;
      case 7 - 1:
        showImages([0, 1, 2]);
        break;
      case 10 - 1:
        showImages([0, 1, 2, 3]);
        break;
      case 12 - 1:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 13 - 1:
        showImages([0, 1, 2, 3, 4, 5, 6]);
        break;
    }
  });

  return (
    <div className="w-full mt-[8vh]  mb-[10vh] ">
      <div className=" relative w-[80%] text-center mx-auto ">
        <h1 className="text-[25vw] tracking-tight font-[3vw] select-none ">
          WORK
        </h1>
        <div className=" absolute top-0 w-full h-full ">
          {images.map(
            (image, i) =>
              image.isActive && (
                <img
                  key={i}
                  className="absolute w-[24vw] h-[50vh] -translate-x-[50%] -translate-y-[50%] "
                  style={{ top: image.top, left: image.left }}
                  src={image.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
