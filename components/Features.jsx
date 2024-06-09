import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col md:flex-row relative gap-y-10 md:gap-x-48 lg:gap-x-56 h-auto md:h-full max-w-screen overflow-hidden mt-10 mb-10 p-6 md:p-10 lg:px-24'>
      <img className='h-[30rem] lg:block md:block sm:hidden lg:h-[30rem] md:h-[25rem] absolute -left-1' src="/icons/bg-gradient.png" alt="bg gradient" />
      <img className='h-[15rem] lg:block md:block sm:hidden lg:h-[15rem] md:h-[10rem] absolute -right-10' src="/icons/bg-gradient.png" alt="bg gradient" />
      <img className='h-12 absolute left-8 lg:left-8 md:left-8 sm:left-[35rem] top-16 lg:top-16 md:top-16' src="/icons/star-1.png" alt="" />
      <div className='h-auto lg:h-[80vh] lg:block md:block sm:hidden md:h-[50vh] w-full md:w-2/5'>
        <div className="relative z-10">
          <img className="absolute lg:h-[48rem] md:h-[27rem] top-0 lg:top-0 md:top-16 translate-x-0 md:translate-x-28 -translate-y-10 lg:left-0 left-0 md:-left-10 z-10" src="/icons/iPhone-13-Pro-Front-straight.png" alt="iPhone 13 Pro Front" />
        </div>
        <div className="ellipse relative md:mt-20 lg:mt-0">
          <img className='absolute w-[24rem] md:w-[32rem] -translate-x-8 md:-translate-x-16 left-18 md:left-36 top-0' src="/icons/Ellipse.png" alt="" />
          <img className='absolute w-[24rem] md:w-[32rem] -translate-x-8 md:-translate-x-16 left-12 md:left-24 top-4 md:top-6' src="/icons/Ellipse.png" alt="" />
          <img className='absolute w-[24rem] md:w-[32rem] -translate-x-8 md:-translate-x-16 left-8 md:left-14 top-8 md:top-12' src="/icons/Ellipse.png" alt="" />
        </div>
      </div>
      <div className='text max-w-full lg:max-w-[30vw] md:max-w-[40vw] pt-6 md:pt-12'>
        <h1 className='text-red-600 text-lg md:text-xl uppercase font-semibold'>Features</h1>
        <h1 className='lg:text-4xl md:text-3xl sm:text-xl text-4xl font-black'>uifry Premium</h1>
        <div>
          <div className="logo-heading flex gap-x-4 items-center my-3 lg:my-3 md:my-2">
            <img className='h-5 md:h-6' src="/icons/star-05.png" alt="star" />
            <h1 className='font-bold'>Budgeting Intervals</h1>
          </div>
          <p className='font-extralight text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div>
          <div className="logo-heading flex gap-x-4 items-center my-3 lg:my-3 md:my-2">
            <img className='h-5 md:h-6' src="/icons/cube-02.png" alt="star" />
            <h1 className='font-bold'>Budgeting Intervals</h1>
          </div>
          <p className='font-extralight text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div>
          <div className="logo-heading flex gap-x-4 items-center my-3 lg:my-3 md:my-2">
            <img className='h-5 md:h-6' src="/icons/cube-04.png" alt="star" />
            <h1 className='font-bold'>Budgeting Intervals</h1>
          </div>
          <p className='font-extralight text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
