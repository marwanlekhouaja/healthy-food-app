import React from 'react'
import naturalfood from "../assets/pictures/natural-food.jpeg"

function NaturalFoodContent() {
  return (
    <div className="relative">
        <img src={naturalfood} alt="natural-food"  style={{height:"400px"}} loading="lazy" className='w-full'  height={300} />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center p-4 z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-4">Natural Food</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-1xl max-w-3xl">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
  )
}

export default NaturalFoodContent