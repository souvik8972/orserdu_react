import React, { useMemo } from 'react'
import IMPORTANT_SAFETY_INFORMATION from '../../Components/IMPORTANT_SAFETY_INFORMATION/IMPORTANT_SAFETY_INFORMATION'
import HeroContainer from '../../Components/HeroContainer/HeroContainer'

const Understanding_esr1_mutations = () => {
  const imageUrl =useMemo(()=>{
    return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/UnderstandingDesktop.png"
  },[])
  return (
    <> <HeroContainer  img={imageUrl}  navLink={"/orserdu-results"} navText={"ORSERDU results"}>

    <h1 className='h-[110vh] w-full'></h1>
    


  </HeroContainer>
  {/* important_Safety_INformation */}
  <div className="w-ful flex justify-center items-center"> 
  <IMPORTANT_SAFETY_INFORMATION/>
  </div>
  </>
  )
}

export default Understanding_esr1_mutations