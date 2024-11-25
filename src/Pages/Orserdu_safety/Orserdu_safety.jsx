import React from 'react'
import HeroContainer from '../../Components/HeroContainer/HeroContainer'
import IMPORTANT_SAFETY_INFORMATION from '../../Components/IMPORTANT_SAFETY_INFORMATION/IMPORTANT_SAFETY_INFORMATION'
import image from "../../assets/images/safety/SafetyWomandesktop.png"


const Orserdu_safety = () => {
  return (
    <> <HeroContainer  img={image} navLink={"/taking-orserdu" } navText={"Taking ORSERDU"}>

    <h1 className='h-[110vh] w-full'></h1>
    


  </HeroContainer>
  {/* important_Safety_INformation */}
  <div className="w-ful flex justify-center items-center"> 
  <IMPORTANT_SAFETY_INFORMATION/>
  </div>
  </>
  )
}

export default Orserdu_safety