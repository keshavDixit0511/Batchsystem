import React from 'react'

const Adv1 = () => {
  return (
    <div className='flex relative items-center justify-center gap-x-40 h-screen max-w-screen overflow-hidden px-24'>
      <img className='h-12 absolute right-12 top-20' src="/icons/star-1.png" alt="" />
      <img className='h-12 absolute right-[45rem] bottom-0' src="/icons/star-2.png" alt="" />
      <div className='text max-w-[38vw]'>
        <h1 className='text-red-600 text-xl uppercase font-semibold mb-5'>Advantages</h1>
        <h1 className='text-6xl font-black mb-8'>Why Choose uifry?</h1>
        <div>
            <div className="logo-heading flex gap-x-4 items-center my-7">
                <div className='bg-red-500 rounded-full p-3'>
                    <img className='h-5' src="/icons/bell-02.png" alt="bell" />
                </div>
                <h1 className='font-black text-3xl'>Clever notifications</h1>
            </div>
            <p className='font-extralight text-xl text-gray-500'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
      </div>
      <div className='h-[80vh] w-2/5'>
        <div className="relative z-10 ">
          <img className="absolute h-[45rem] top-0 translate-x-28 -translate-y-10 left-0 z-10" src="/icons/iPhone-13-Pro-Front-straight-1.png" alt="iPhone 13 Pro Front" />
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

export default Adv1
