import React from "react";
import Button from "./Button";
import { nanoid } from "nanoid";
function product({ val, mover, count }) {
  return (
    <div key={nanoid()} className="w-[100vw] h-[40vh]  py-[2vh] text-white">
      <div  onMouseEnter={() => mover(count)} className="w-[80vw] mx-auto flex  justify-between items-center ">
        <h1 className="text-[3vw] capitalize font-medium">{val.title}</h1>
        <div className="dets w-[33.3vw] ">
          <p className="text-left  text-[1.6vw] mb-[6vh]">{val.description}</p>
          <div className="flex  items-center gap-[2vw]">
            {val.live && <Button title="Live" />}
            {val.case && <Button title="case study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
