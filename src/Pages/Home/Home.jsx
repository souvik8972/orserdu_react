import React from "react";
import ImageSwiper from "../../Components/Slider/ImageSwiper";
import arrow from "../../assets/images/figure/arrow-right_Light.png"
import IMPORTANT_SAFETY_INFORMATION from "../../Components/IMPORTANT_SAFETY_INFORMATION/IMPORTANT_SAFETY_INFORMATION";

const Container = () => {
  return (
    <div className="w-full ">
      {/* image swiper */}
      <div className=" relative">
      <ImageSwiper />
 
{/* <div className="w-[368px] h-[300px] absolute top-5 z-50 right-28 bg-white rounded-lgf "></div> */}

      </div>
      {/*  */}
      <div className="conatiner_text w-full  flex justify-center items-center flex-col">
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
