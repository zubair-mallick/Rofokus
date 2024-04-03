import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import AnimatedCursor from "react-animated-cursor"

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <div className="w-[100vw] bg-[#141517] text-white ">
      <AnimatedCursor
      outerSize={0}
      innerScale={.6}
      innerSize={25}
      innerStyle={{
        mixBlendMode: "difference",
        backgroundColor:"#fff"
      }}
      />
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
