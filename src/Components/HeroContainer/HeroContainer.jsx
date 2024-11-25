import React from 'react';
import arrow from "../../assets/images/figure/arrow-right_Light.png";
import { NavLink } from 'react-router-dom';

const HeroContainer = ({ children, img, navLink,navText }) => {
  return (
    <div>
      {/* Image Section */}
      {img && (
        <div className="relative flex justify-center bg-light_mint_green w-full m-0 h-auto">
          <img className="z-10" src={img} alt="Hero" />
        </div>
      )}

      {/* Content Section */}
      <div className="w-full relative -mt-14 bg-light_mint_green h-auto z-0 flex justify-center">
        <div className="relative w-[1000px] xxl:w-[1140px] h-auto bg-white rounded-bl-[112px] rounded-br-[112px] shadow_f mb-12 flex justify-center">
          <div className="mt-20 pt-0 pb-0 mb-[5rem] w-[85%]">{children}</div>

          {/* Navigation Section */}
          {navLink && (
            <NavLink to={navLink} className=" hover:underline  text-dark_green absolute -bottom-5 bg-white shadow_round p-2 flex items-center justify-center  w-[18%] h-12 rounded-3xl ">
              <div className="w-[85%] p-3 flex justify-between items-center h-full ">
            <div className="xxl:text-[18px]  " >
              {navText}
            </div>
              </div>
              <div className="w-[15%] p-2   ">
                <img src={arrow} alt="Arrow" />
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
