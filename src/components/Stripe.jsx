import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.6vw]  text-[1.3vw] py-[1.2vh] gap-[1.6vw] flex  items-center border-t-[.4vh] border-b-[.4vh] border-r-[,4vh] border-zinc-600 ">
      <img className="h-[4vh] w-[10vw]" src={val.url} />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
