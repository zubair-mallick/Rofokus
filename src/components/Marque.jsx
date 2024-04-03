import React from "react";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
function Marque({ imagesUrl,direction }) {
  
  return (
    <div
    
      key={nanoid()}
      className="flex w-full py-[5vh]  gap-[5vw] whitespace-nowrap  overflow-hidden "
    >       <motion.div
                    initial={{ x: direction === "left" ? "0" : "-100%" }}
                    animate={{ x: direction === "left" ? "-100%" : "0" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    className="flex flex-shrink-0 gap-20 py-8 pr-24"
                >
            {imagesUrl.map((url, i) => (
              <img key={nanoid()} src={url} className="w-[10vw] flex-shrink-0" />
             ))}
             </motion.div>
             <motion.div
                    initial={{ x: direction === "left" ? "0" : "-100%" }}
                    animate={{ x: direction === "left" ? "-100%" : "0" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    className="flex flex-shrink-0 gap-20 py-8 pr-24"
                >
            {imagesUrl.map((url, i) => (
              <img key={nanoid()} src={url} className="w-[10vw] flex-shrink-0" />
             ))}
             </motion.div>
    </div>
  );
}

export default Marque;
