import React from 'react'

const Download = () => {
  return (
    <div className='h-[70vh] w-full relative overflow-hidden'>
      <img className='h-12 absolute right-12 top-0' src="/icons/star-1.png" alt="" />
      <img className='h-12 absolute left-14 top-[15rem]' src="/icons/star-2.png" alt="" />
    <div className='mx-auto px-28 bg-black relative text-white h-[70vh] lg:h-[70vh] md:h-[50vh] my-20 overflow-hidden max-w-[78vw]'>
      <img className='absolute invert h-12 right-[25rem] lg:right-[25rem] md:right-[33rem] top-20 lg:top-20 md:top-2' src="/icons/star-1.png" alt="star" />
      <img className='absolute invert h-12 bottom-24 left-[30rem]' src="/icons/star-2.png" alt="star" />
      <div className="ellipse relative">
          <img className='absolute z-0 w-[32rem] translate-y-1/2 -left-[24rem] invert top-0' src="/icons/Ellipse.png" alt="" />
          <img className='absolute z-0 w-[32rem] translate-y-1/2 -left-[24rem] invert top-20' src="/icons/Ellipse.png" alt="" />
          <img className='absolute z-0 w-[32rem] translate-y-1/2 -left-[24rem] invert top-36' src="/icons/Ellipse.png" alt="" />
        </div>
        <div className="ellipse relative">
          <img className='absolute z-0 w-[32rem] -right-[20rem] invert -top-[15rem]' src="/icons/Ellipse.png" alt="" />
          <img className='absolute z-0 w-[32rem] -right-[22rem] invert -top-[17rem]' src="/icons/Ellipse.png" alt="" />
          <img className='absolute z-0 w-[32rem] -right-[24rem] invert -top-[20rem]' src="/icons/Ellipse.png" alt="" />
        </div>
      <div className="text-image relative">
        <div className="text text-white mt-[8rem] lg:mt-[8rem] md:mt-[2rem] max-w-[32rem] lg:max-w-[32rem] md:max-w-[18rem] z-10 absolute">
          <h1 className='text-5xl lg:text-5xl md:text-3xl capitalize my-7 font-black'>Ready to get started?</h1>
          <p className='my-8 text-xl lg:text-xl md:text-sm'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
          <div className='flex items-center max-w-[14rem] lg:max-w-[14rem] md:max-w-[11rem] p-3 lg:p-3 md:p-1 rounded-md text-black gap-x-10 lg:gap-x-10 md:gap-x-2 bg-white'>
            <p>Download Now</p>
            <img className='h-10' src="/icons/vector.png" alt="apple-icon" />
          </div>
        </div>
        <div className="images absolute -right-28 lg:-right-28  top-8 lg:top-8 md:top-1">
          <img className='h-[30rem] lg:h-[30rem] md:h-[15rem]' src="/icons/iPhone-13-Pro-black-div.png" alt="" />
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Download
