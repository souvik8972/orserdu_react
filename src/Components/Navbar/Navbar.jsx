import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
// import
import logo_img from "../../assets/images/logos/orserdu-logo.png";

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User is scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // User is scrolling up, show navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);






  return (
    // navbar conatiner
    <div className={`h-[205px] top-0 z-[1000] bg-white w-full sticky transition-transform duration-300 ${isVisible ? 'transform-none' : '-translate-y-full'}`}>
      {/* navbar top section */}
      <div className="top-section h-[42px] bg-mint_green w-full flex justify-center items-center text-[18px]  tex">
        <p className="tracking-[0.10px] leading-[18px] font-[600]  text-[#000000]">
          This website is intended for US residents only.
        </p>
      </div>
      {/* navbar middle section   */}
      <div className="middle-section h-[121px] w-full flex justify-start xxl:justify-center ">
        {/* insdie middle section */}
        <div className="w-[90%] h-[100%] flex justify-center items-end xxl:w-[78%] ">
          <div className="inside_bottom_section  w-full h-[85%] flex  ">
            {/* left section */}
            <div className="left_section w-[17%] xxl:w-[20%] h-full  flex justify-start ">
              {/* logo section */}
              <div className="xxl:w-[204px] w-[12.75rem]  h-[80%] xxl:h-[80%] mt-1 ">
                <img
                  className=" w-[8.9375rem] ml-5 xxl:w-full xxl:ml-0 h-full object-contain block"
                  src={logo_img}
                  alt="log"
                />
              </div>
            </div>
            {/* right section */}
            <div className="right_section w-[75%] h-full  flex flex-col justify-between">
              {/* menu section */}
              {/* top menu */}
              <div className="top_link h-[20px] w-full  flex justify-end gap-[40px] text-[14px] font-[300] underline leading-[21px]">
                <a className="isi-scroll">Important Safety Information</a>
                <a href="https://rxmenarinistemline.com/United%20States%20Patient%20Package%20Insert%20Approved.pdf">
                  Medication Guide
                </a>
                <a href="http://pi.orserdu.com">Full Prescribing Information</a>
                <a className="leaving-modal" href="https://www.orserduhcp.com">
                  Healthcare Professional Site
                </a>
              </div>
              {/* bottom menu */}
              <div className="bottom_menu h-[53px] w-full flex justify-between items-center leading-[18px]  font-semibold text-[18px] text-left text-dark_green">
                <div className="nav-item hover:bg-custom-gradient hover:text-white border-r-[3px] border-yellow flex justify-center items-center  h-full w-fit  ">
                  <a href="/" >
                    <span className="d-flex align-items-center gap-1 p-4 ">
                      <span>Home</span>
                    </span>
                  </a>
                </div>
                <div className="nav-item hover:bg-custom-gradient hover:text-white border-r-[3px] border-yellow flex justify-center items-center  h-full w-full  relative ease-in-out group">
      <a href="/understanding-esr1-mutations" className=" p-2">
        <span className="flex items-center gap-1 cursor-pointer" tabIndex={0} role="button">
          <span>
            Understanding <br />
            <nobr>
              <i>ESR1</i> mutations
            </nobr>
          </span>
          <span><IoIosArrowDown className="font-extrabold text-green-500 group-hover:rotate-180" /></span>
        </span>
      </a>

      {/* Dropdown Menu */}
      <ul className="submenu hidden absolute w-full top-[52px] left-0   rounded-3xl rounded-t-none  shadow-lg z-10 group-hover:block  border-red text-dark_green  bg-white">
  <li className="d-flex justify-content-start gap-1 align-items-start  height-auto ">
    <a href="/understanding-esr1-mutations#what-you-should-know" className="text-left flex p-3 pl-0 items-start justify-start   gap-1 nav-item hover:bg-custom-gradient hover:text-white ">
    <span className=" "><MdKeyboardArrowRight /></span>
      <span className="text-left">What you <br className="d-none d-xl-block"/>should know</span>
    </a>
  </li>
  <li className="d-flex justify-content-start gap-1 align-items-start pad-1 height-auto">
    <a href="/understanding-esr1-mutations#testing"  className="text-left flex   rounded-3xl rounded-t-none  p-4 pl-2 justify-start gap-1 nav-item hover:bg-custom-gradient hover:text-white  ">
   <span className=""><MdKeyboardArrowRight /></span>
      <span className="text-left">Testing</span>
    </a>
  </li>
</ul>

    </div>
                <div className="nav-item hover:bg-custom-gradient hover:text-white border-r-[3px] border-yellow flex justify-center items-center   h-full w-full  ">
                  <a href="/orserdu-results " className="">
                    <span className="d-flex align-items-center gap-1 ">
                      <span>
                        ORSERDU <br />
                        results
                      </span>
                    </span>
                  </a>
                </div>
                <div className="nav-item hover:bg-custom-gradient hover:text-white border-r-[3px] border-yellow flex justify-center items-center  h-full w-full ">
                  <a href="/orserdu-safety" className="">
                    <span className="d-flex align-items-center gap-1">
                      <span>
                        ORSERDU <br />
                        safety
                      </span>
                    </span>
                  </a>
                </div>
                <div className="nav-item hover:bg-custom-gradient hover:text-white border-r-[3px] border-yellow flex justify-center items-center  h-full w-full ">
                  <a href="/taking-orserdu"  className="">
                    <span className="d-flex align-items-center gap-1">
                      <span>
                        Taking <br />
                        ORSERDU
                      </span>
                    </span>
                  </a>
                </div>
                <div className="nav-item hover:bg-custom-gradient hover:text-white border-r-[3px] border-yellow flex justify-center items-center  h-full w-full ">
                  <a href="/helpful-resources" className="">
                    <span className="d-flex align-items-center gap-1">
                      <span>
                        Helpful <br />
                        resources
                      </span>
                    </span>
                  </a>
                </div>
                <div className="nav-item hover:bg-custom-gradient hover:text-white border-r-[3px] border-yellow flex justify-center items-center  h-full w-full ">
                  <a href="/savings-and-support" className="">
                    <span className="d-flex align-items-center gap-1">
                      <span>
                        Savings &amp;
                        <br /> support
                      </span>
                    </span>
                  </a>
                </div>
                <div className="nav-item hover:bg-custom-gradient hover:text-white border-r-[3px] border-yellow flex justify-center items-center  h-full w-full ">
                  <a href="/real-stories" className="">
                    <span className="d-flex align-items-center gap-1">
                      <span>
                        Real
                        <br /> stories
                      </span>
                    </span>
                  </a>
                </div>
              

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar bottom section */}
      <div className="abc bottom-section h-[42px] tracking-[0.11px] bg-light_mint_green w-full flex justify-center items-center text-[22px] font-[550]">
  <p className="paddmob py-1">
    Share your ORSERDU story 
    with others.
    <span style={{ textDecoration: 'underline', color: '#000' }}>
      <a
        style={{ color: '#000' }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://myesr1story.com/"
      >
        Learn how
      </a>
    </span>
    .
  </p>
</div>

    </div>
  );
};

export default Navbar;
