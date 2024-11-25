import React from "react";
import image1 from "../../assets/images/logos/Menarini_Group_RGB.png"
import image2 from "../../assets/images/logos/Stemline_Tag_R_RGB.png"

const Footer = () => {
  return (
    <footer className="bg-light_gray h-64 w-full mt-12 flex justify-center items-center border-b-[1.8rem] border-list_color font-[300] xxl:text-[1.1rem] text-[0.85rem]">
      <div className="w-[95%] xxl:w-[80%] h-full  flex justify-center items-center">
        {/* text  */}
        <div className="w-[60%] h-[70%]  flex flex-col gap-4">
          {/* text area */}
          <div className=" ">
            <p className="">ORSERDU is a registered trademark of the Menarini Group.</p>
            <p className="">Stemline ARC is a registered trademark of Stemline Therapeutics, Inc., a Menarini Group Company.</p>
            <p className="">© 2024 Stemline Therapeutics, Inc., a Menarini Group Company.</p>
            <p className="">All rights reserved. Last updated 10/24 MAT-US-ELA-00319-v3</p>
          </div>
          {/* link area */}
          <div className="flex flex-wrap items-center space-x-2 text-[0.80rem] xxl:text-[1.1rem] font-300 underline text-dark_green">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://stemline.com/privacy-policy/"
        className="text-blue-600 hover:text-blue-800"
      >
        Privacy &amp; Terms of Use
      </a>
      <span className="hidden md:inline">|</span>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://stemline.com/ccpa-policy/"
        className="text-blue-600 hover:text-blue-800"
      >
        CCPA Policy
      </a>
      <span className="hidden md:inline">|</span>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://stemline.com/cookie-policy/"
        className="text-blue-600 hover:text-blue-800"
      >
        Cookie Policy
      </a>
      <span className="hidden md:inline">|</span>
      <a
        rel="noreferrer"
        className="text-blue-600 hover:text-blue-800"
        href="#"
        onClick={() => window.otSDK.showSettings()}
      >
        Cookies Settings
      </a>
      <span className="hidden md:inline">|</span>
      <a href="/sitemap" className=" hover:text-blue-800">
        Sitemap
      </a>
    </div>

          
        </div>
        <div className="w-[40%] h-full flex justify-center items-center">
        <div className="w-[100%] h-[70%]  flex justify-center items-center gap-3">

        <a
        target="_blank"
        href="https://www.menarini.com/"
        className="  h-[60px]"
      >
        <img
        src={image1}
          alt="Menarini logo"
          className="w-full h-full object-cover"
        />
      </a>
      <a
        target="_blank"
        href="https://www.stemline.com"
        className=" h-[60px]"
      >
        <img
          src={image2}
          alt="Stemline® Logo"
          className="h-full object-cover "
        />
      </a>

        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
