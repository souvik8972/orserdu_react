import React from 'react'
import { ShimmerPostItem } from "react-shimmer-effects";

const ShimmerEffect = () => {
  return (
    <div className="w-full  ">
        <ShimmerPostItem text hasImage card title  cta  animationDuration={2}  />
    </div>
  )
}

export default ShimmerEffect