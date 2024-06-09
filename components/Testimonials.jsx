import React from 'react'

const Testimonials = () => {
  return (
    <div className='relative'>
      <img className='h-12 absolute left-[5rem] bottom-28' src="/icons/star-2.png" alt="" />
    <div className='flex flex-col gap-5 items-center justify-center'>
        <h1 className='uppercase font-semibold text-red-500'>Testimonial</h1>
        <h1 className='lg:text-5xl md:text-3xl text-2xl ml-[5rem] lg:ml-[5rem] md:-ml-8 font-black lg:max-w-[26rem] max-w-[20rem] md:max-w-[35rem]'>What our Users say About Us?</h1>
    </div>
    
    <div className='flex items-center justify-center gap-x-48 h-screen lg:h-screen md:h-full max-w-screen lg:max-w-screen  overflow-hidden px-28 lg:px-28 md:px-10'>
        
      <div className='lg:h-[80vh] h-[80vh] w-2/5 md:hidden lg:block'>
        <div className="relative z-10">
          <img className='h-38 absolute top-[22rem] left-[21rem] -translate-x-1/2 -translate-y-1/2' src="/icons/nick-jonas-center.png" alt="nick" />
          <div className='bg-red-500 absolute top-[16rem] left-[22rem] h-20 w-20 rounded-full flex items-center justify-center'>
            <img className='h-7' src="/icons/inverted-coma.png" alt="" />
          </div>
          <img className='h-[19rem] absolute top-[22rem] left-0' src="/icons/uncle-with-hat.png" alt="uncle with hat" />
          <img className='h-[19rem] absolute top-0 left-0' src="/icons/girl-with-ponny.png" alt="girl-with-ponny" />
          <img className='h-[20rem] absolute top-[24rem] left-[21rem]' src="/icons/girl-with-openhair.png" alt="girl-with-openhair" />
          <img className='h-[18rem] absolute top-[1rem] left-[21rem]' src="/icons/boy-with-specs.png" alt="boy-with-specs" />
        </div>
        <div className="ellipse relative">
            <img className='absolute w-[32rem] -translate-x-16 left-36 top-5' src="/icons/Ellipse.png" alt="" />
            <img className='absolute w-[32rem] -translate-x-16 left-24 top-10' src="/icons/Ellipse.png" alt="" />
            <img className='absolute w-[32rem] -translate-x-16 left-14 top-16' src="/icons/Ellipse.png" alt="" />
        </div>
      </div>
      <div className="text-persons flex flex-col items-center justify-center">
      <div className='text max-w-[30vw] lg:max-w-[30vw] md:max-w-[60vw]'>
        <div>
            <div className="heading my-7">
                <h1 className='font-black text-3xl capitalize'>the best financial accounting app ever!</h1>
            </div>
            <p className='font-extralight text-xl text-gray-500'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
        </div>
      </div>
      <div>
      <div className="persons flex items-center mt-8 gap-3">
        <img className='h-12' src="/icons/image-1.png" alt="persons" />
        <img className='h-12' src="/icons/image-2.png" alt="persons" />
        <img className='h-12' src="/icons/image-3.png" alt="persons" />
        <img className='h-12' src="/icons/image-4.png" alt="persons" />
        <img className='h-12' src="/icons/image-5.png" alt="persons" />
      </div>
      <h1 className='font-bold mt-5'>Nick Jonas</h1>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials
