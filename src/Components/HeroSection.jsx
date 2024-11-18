import React from 'react'
import HeroImg from '../Images/hero-sec-image.jpg'
function HeroSection() {
  return (
    <div>
      <div className='container mx-auto flex flex-col-reverse md:flex-row pt-9 gap-9'>
        <div className="left-content w-full md:w-1/2 px-4 ">
            <h1 className='text-4xl md:text-5xl font-bold'>Navigating the <br />digital landscape <br />for success</h1>
            
            <p className='text-lg mt-5 md:mt-20'>Our digital marketing agency helps businesses <br /> grow and succeed online through a range of <br /> services including SEO, PPC, social media marketing, <br /> and content creation.</p>
            <button className="bg-black text-white px-4 py-2 sm:w-full rounded-lg btn-req mt-11">
         Book a consultant
        </button>
        </div>
        <div className="right-content w-full md:w-1/2">
            <img src={HeroImg} alt="hero-image" className="w-full object-cover p-2 " />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
