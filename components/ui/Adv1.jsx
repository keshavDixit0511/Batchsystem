import React from 'react'

const Adv1 = () => {
  return (
    <div className='flex flex-col lg:flex-row relative items-center justify-center gap-y-10 lg:gap-x-40 h-auto lg:h-screen max-w-screen overflow-hidden px-6 md:px-16 lg:px-24'>
      <img className='h-12 absolute right-6 md:right-12 top-10 md:top-20' src="/icons/star-1.png" alt="" />
      <img className='h-12 absolute right-24 md:right-[45rem] bottom-0' src="/icons/star-2.png" alt="" />
      <div className='text max-w-full lg:max-w-[38vw]'>
        <h1 className='text-red-600 text-lg md:text-xl uppercase font-semibold mb-3 md:mb-5'>Advantages</h1>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8'>Why Choose uifry?</h1>
        <div>
          <div className="logo-heading flex gap-x-4 items-center my-5 md:my-7">
            <div className='bg-red-500 rounded-full p-2 md:p-3'>
              <img className='h-4 md:h-5' src="/icons/bell-02.png" alt="bell" />
            </div>
            <h1 className='font-black text-2xl md:text-3xl'>Clever notifications</h1>
          </div>
          <p className='font-extralight text-base md:text-xl text-gray-500'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
      </div>
      <div className='h-[60vh] md:h-[70vh] lg:h-[80vh] w-full lg:w-2/5'>
        <div className="relative z-10">
          <img className="absolute h-[30rem] md:h-[40rem] lg:h-[45rem] top-0 translate-x-0 lg:-translate-x-10  -translate-y-10 left-0 md:left-40 z-10" src="/icons/iPhone-13-Pro-Front-straight-1.png" alt="iPhone 13 Pro Front" />
        </div>
        <div className="ellipse relative">
          <img className='absolute w-[24rem] md:w-[28rem] lg:w-[32rem] -translate-x-8 md:-translate-x-1 lg:-translate-x-16 left-20 md:left-28 lg:left-36 top-0' src="/icons/Ellipse.png" alt="" />
          <img className='absolute w-[24rem] md:w-[28rem] lg:w-[32rem] -translate-x-8 md:-translate-x-1 lg:-translate-x-16 left-14 md:left-20 lg:left-24 top-4 md:top-5 lg:top-6' src="/icons/Ellipse.png" alt="" />
          <img className='absolute w-[24rem] md:w-[28rem] lg:w-[32rem] -translate-x-8 md:-translate-x-1 lg:-translate-x-16 left-10 md:left-14 lg:left-14 top-8 md:top-10 lg:top-12' src="/icons/Ellipse.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Adv1
