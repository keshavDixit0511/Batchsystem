import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row relative h-screen lg:h-screen md:h-full max-w-screen overflow-hidden p-8 md:p-12 lg:p-16'>
      <img className='h-[40rem] lg:h-[40rem] md:h-[25rem] absolute right-[5rem] lg:right-[5rem] md:-right-[4rem] bottom-[2rem] lg:bottom-[2rem] md:bottom-[15rem]' src="/icons/bg-gradient.png" alt="bg gradient" />
      <img className='h-12 absolute left-8 -top-2' src="/icons/star-1.png" alt="" />
      <img className='h-12 absolute right-10 -top-3' src="/icons/star-2.png" alt="" />
      <img className='h-12 absolute bottom-[12rem] left-[48rem] hidden md:block' src="/icons/star-1.png" alt="" />
      <img className='h-12 absolute bottom-[15rem] md:bottom-[20rem] lg:bottom-[15rem] left-40 hidden md:block' src="/icons/star-2.png" alt="" />
      <div className='h-[60vh] lg:h-[60vh] md:h-[50vh] w-full md:w-3/5'>
        <div className="text max-w-full md:max-w-[42vw] sm:max-w-[100vw]">
          <h1 className='text-xl sm:text-2xl lg:text-4xl md:text-2xl font-bold mb-3 md:mb-5'>Make The Best Final Decision</h1>
          <p className='text-xl md:text-xl lg:text2xl font-light mb-4 md:mb-6'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className="buttons flex sm:flex-row flex-col md:flex-row items-center gap-8 md:gap-14">
          <div className="flex gap-5 cursor-pointer items-center justify-center get-started bg-black p-4 md:p-5 text-white max-w-[10rem] md:max-w-[12rem]">
            <p>Get Started</p>
            <img className='invert h-3' src="/icons/arrow-right-line.svg" alt="" />
          </div>
          <div className='flex gap-3 md:gap-5 items-center justify-center cursor-pointer'>
            <img className='h-6 md:h-8' src="/icons/play-icon.png" alt="" />
            <p>Watch Video</p>
          </div>
        </div>
        <div>
          <img className='h-48 lg:h-[25rem] md:h-[20rem] sm:hidden md:block lg:block mx-0 md:mx-10 md:my-10' src="/icons/Group-35924-rectangle-strip.png" alt="" />
        </div>
      </div>
      <div className='h-[60vh] md:h-[80vh] w-full md:w-2/5'>
        <div className="relative z-10 ">
          <img className="absolute h-[42rem] lg:h-[42rem] md:h-[29rem] sm:h-[34rem] top-0  lg:top-0  md:top-0  sm:-top-28  -translate-y-16 md:-translate-y-16 -translate-x-16 md:-translate-x-16 left-0 lg:left-1  sm:left-44  md:left-0 z-30" src="/icons/iPhone-13-Pro-Front.png" alt="iPhone 13 Pro Front" />
          <img className="absolute h-[42rem] lg:h-[42rem] md:h-[29rem] sm:h-[34rem] top-10 lg:top-10 md:top-10 sm:-top-24  -translate-y-8 md:-translate-y-16 -translate-x-12 md:-translate-x-16 left-10 lg:left-20 sm:left-56  md:left-20 z-10 " src="/icons/iPhone-13-Pro-Front-1.png" alt="iPhone 13 Pro Front (1)" />
          <img className="absolute h-[42rem] lg:h-[42rem] md:h-[29rem] sm:h-[34rem] top-20 lg:top-20 md:top-20 sm:-top-20  -translate-y-4 md:-translate-y-16 -translate-x-8 md:-translate-x-20 left-20  lg:left-40 sm:left-64 md:left-40 z-0 " src="/icons/iPhone-13-Pro-Front-2.png" alt="iPhone 13 Pro Front (2)" />
        </div>
        <div className="ellipse relative">
          <img className='absolute w-[24rem] lg:w-[24rem] md:w-[32rem] sm:w-[25rem] -translate-x-8 lg:-translate-x-8 md:-translate-x-16 sm:translate-x-28 left-18 lg:left-18  md:left-36 top-0 lg:top-0 md:top-0 sm:-top-32' src="/icons/Ellipse.png" alt="" />
          <img className='absolute w-[24rem] lg:w-[24rem] md:w-[32rem] sm:w-[25rem] -translate-x-8 lg:-translate-x-8 md:-translate-x-16 sm:translate-x-28 left-12 lg:left-28  md:left-24 top-4 lg:top-4 md:top-6 sm:-top-24' src="/icons/Ellipse.png" alt="" />
          <img className='absolute w-[24rem] lg:w-[24rem] md:w-[32rem] sm:w-[25rem] -translate-x-8 lg:-translate-x-8 md:-translate-x-16 sm:translate-x-28 left-8  lg:left-9 md:left-14 top-8 lg:top-8 md:top-12 sm:-top-16' src="/icons/Ellipse.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
