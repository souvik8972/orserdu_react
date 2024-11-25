import React from "react";
import ImageSwiper from "../../Components/Slider/ImageSwiper";
import dark_arrow from "../../assets/images/figure/arrow-right_Light.png"
import arrow from "../../assets/images/figure/arrow-right.png"

import IMPORTANT_SAFETY_INFORMATION from "../../Components/IMPORTANT_SAFETY_INFORMATION/IMPORTANT_SAFETY_INFORMATION";
import { NavLink } from "react-router-dom";

const Container = () => {
  return (
    <div className="w-full ">
      {/* image swiper */}
      <div className=" relative">
      <ImageSwiper />
 {/* box top of image   */}
<div className="w-[368px] h-[300px] absolute top-3 z-50 right-7 xxl:right-32 bg-white rounded-3xl flex flex-col  p-4 shadow-xl ">

<div className=" border-b-2 border-yellow mb-2">
    <p className="text-[18px] tracking-[.09px] leading-[20px] font-[300] mb-2">
      For postmenopausal women and adult men with <em>ESR1</em>-mutated, ER+/HER2- advanced or
      metastatic breast cancer following disease progression on endocrine therapy
    </p>
  </div>

  <div className=" flex  flex-col text-[22px] text-dark_green gap-3">
    <div className="flex justify-center items-center ">
      <div className="leading-[23px] flex flex-col gap-2">
        <h3>If your cancer has an <em>ESR1</em> mutation</h3>
        <p className="text-[18px] font-light text-black">ORSERDU may be right for you</p>
      </div>
      <NavLink to="/understanding-esr1-mutations/">
        <div className="w-12 h-12 rounded-full bg-white shadow-xl ">
          <img src={dark_arrow} alt="Arrow" className="w-full h-full object-contain p-3"/>
        </div>
      </NavLink>
    </div>
    <div className="flex justify-center items-center">
      <div className="leading-[23px] flex flex-col gap-2">
        <h3>If you have been prescribed ORSERDU</h3>
        <p className="text-[18px] font-light text-black">See the clinical trial results</p>
      </div>
      <NavLink to="/orserdu-results/">
        <div className="w-12 h-12 rounded-full bg-white shadow-xl  ">
          <img src={arrow} alt="Arrow" className="w-full h-full object-contain p-3"/>
        </div>
      </NavLink>
    </div>
  </div>



</div>
{/* text top of image */}
<div className="absolute  bottom-24 text-[24px] font-[600] z-50 w-full text-center text-dark_green leading-[23px]">
  <p >
    When it’s time to change treatment, ORSERDU may be the one for you. It works specifically against
    <em>ESR1</em>-mutated <br/> metastatic breast cancer, and it’s a once-daily pill you can take at home
    or on the go.
  </p>
</div>


      </div>
      {/*  */}
      <div className=" conatiner_text w-full  flex justify-center items-center flex-col">
      <div class="text-[16px] font-[300] w-[80%] flex justify-start items-center mt-1">
        <p className="">
      ER+, estrogen receptor-positive;
          <span>ESR1</span>, estrogen receptor 1; HER2-, human epidermal growth factor
          receptor 2-negative.
        </p>
      </div>
      {/* text area */}
      <IMPORTANT_SAFETY_INFORMATION/>
     
      </div>
    </div>
  );
};

export default Container;
