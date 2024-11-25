import React, { useMemo } from 'react'
import HeroContainer from '../../Components/HeroContainer/HeroContainer'
import IMPORTANT_SAFETY_INFORMATION from '../../Components/IMPORTANT_SAFETY_INFORMATION/IMPORTANT_SAFETY_INFORMATION'


const Taking_orserdu = () => {

  const imageUrl = useMemo(() => {
    return "https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Dtp_website/TakingDesktop.png";
  }, []);
  return (
    <> <HeroContainer  img={imageUrl} navLink={"/helpful-resources"}  navText={"Helpful resources"}>

    <h1 className='h-[110vh] w-full'></h1>
    


  </HeroContainer>
  {/* important_Safety_INformation */}
  <div className="w-ful flex justify-center items-center"> 
  <IMPORTANT_SAFETY_INFORMATION/>
  </div>
  </>
  )
}

export default Taking_orserdu