import React from 'react'
import HeroContainer from '../../Components/HeroContainer/HeroContainer'
import img from "../../assets/images/hero/aboutDesktop.png"
import IMPORTANT_SAFETY_INFORMATION from '../../Components/IMPORTANT_SAFETY_INFORMATION/IMPORTANT_SAFETY_INFORMATION'

const Orserdu_results = () => {
  return (
    <>
    {/* add HeroConatiner  */}
       <HeroContainer img={img} >

    <h1 className='h-[110vh] w-full'></h1>
    


  </HeroContainer>
  {/* important_Safety_INformation */}
  <div className="w-ful flex justify-center items-center"> 
  <IMPORTANT_SAFETY_INFORMATION/>
  </div>
  
    </>
 
  )
}

export default Orserdu_results