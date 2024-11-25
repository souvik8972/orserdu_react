import React from 'react'
import { ShimmerPostItem } from "react-shimmer-effects";

const ShimmerEffect = () => {
  return (
    <div className="w-full mt-10 ">
        <ShimmerPostItem text hasImage card title  cta  animationDuration={2}  />
    </div>
  )
}

export default ShimmerEffect