import React from 'react'

const Hero = () => {
  return (
    <div className='flex relative h-screen max-w-screen overflow-hidden p-12 px-16 pl-24'>
      <img className='h-12 absolute left-8 -top-2' src="/icons/star-1.png" alt="" />
      <img className='h-12 absolute right-10 -top-3' src="/icons/star-2.png" alt="" />
      <img className='h-12 absolute bottom-[12rem] left-[48rem]' src="/icons/star-1.png" alt="" />
      <img className='h-12 absolute bottom-[15rem] left-40' src="/icons/star-2.png" alt="" />
      <div className='h-[80vh] w-3/5'>
        <div className="text max-w-[50vw]">
          <h1 className='text-8xl font-bold mb-5'>Make The Best Final Decesion</h1>
          <p className='text-2xl font-light mb-6'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className="buttons flex items-center gap-14">
          <div className="flex gap-5 cursor-pointer items-center justify-center get-started bg-black p-5 text-white max-w-[12rem]">
            <p>Get Started</p>
            <img className='invert h-3' src="/icons/arrow-right-line.svg" alt="" />
          </div>
          <div className='flex gap-5 items-center justify-center cursor-pointer'>
            <img className='h-8' src="/icons/play-icon.png" alt="" />
            <p>Watch Video</p>
          </div>
        </div>
        <div>
          <img className='h-[25rem] mx-10' src="/icons/Group-35924-rectangle-strip.png" alt="" />
        </div>
      </div>
      <div className='h-[80vh] w-2/5'>
      <div className="relative z-10 ">
          <img className="absolute top-0 -translate-y-24 -translate-x-32 left-0 z-30" src="/icons/iPhone-13-Pro-Front.png" alt="iPhone 13 Pro Front" />
          <img className="absolute top-10 -translate-y-16 -translate-x-24 left-20 z-10 " src="/icons/iPhone-13-Pro-Front-1.png" alt="iPhone 13 Pro Front (1)" />
          <img className="absolute top-20 -translate-y-8 -translate-x-16 left-40 z-0 " src="/icons/iPhone-13-Pro-Front-2.png" alt="iPhone 13 Pro Front (2)" />
        </div>
        <div className="ellipse relative">
          <img className='absolute w-[32rem] -translate-x-16 left-36 top-0' src="/icons/Ellipse.png" alt="" />
          <img className='absolute w-[32rem] -translate-x-16 left-24 top-6' src="/icons/Ellipse.png" alt="" />
          <img className='absolute w-[32rem] -translate-x-16 left-14 top-12' src="/icons/Ellipse.png" alt="" />
        </div>
        

      </div>
    </div>
  )
}

export default Hero
