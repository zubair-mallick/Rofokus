import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

import arqitel from "../assets/arqitel.webm";
import ttr from "../assets/ttr (1).webm";
import yir from "../assets/yir.webm";
import yahoo from "../assets/yahoo (1).webm";

function Products(props) {
  const [position, setPosition] = useState(null);

  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];
  const mover = (val) => {
    setPosition(val * 40);
  };

  return (
    <div className="mt-[10vh] relative">
      {products.map((val, index) => (
        <Product key={index} count={index} mover={mover} val={val} />
      ))}

      <div className="absolute top-1 w-full h-full  pointer-events-none ">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `vh` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
          className="window w-[31vw] absolute left-[40%]  bg-white h-[40vh]   overflow-hidden "
        >
          <motion.div
            animate={{ y: -position + `vh` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="scence w-[31vw]  bg-sky-800 h-[40vh] "
          >
             
              <video autoPlay muted loop>
                <source src={arqitel} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            
          </motion.div>
          <motion.div
            animate={{ y: -position + `vh` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="scence w-[31vw]   bg-green-100 h-[40vh]  "
          >
            <video autoPlay muted loop>
              <source src={ttr} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `vh` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="scence w-[31vw]   bg-yellow-100 h-[40vh]  "
          >
            <video autoPlay muted loop>
              <source src={yir} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `vh` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="scence w-[31vw]   bg-cyan-100 h-[40vh]  "
          >
            <video autoPlay muted loop>
              <source src={yahoo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
