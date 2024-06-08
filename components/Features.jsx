import React from 'react'

const Features = () => {
  return (
    <div className='flex relative gap-x-48 h-screen max-w-screen overflow-hidden mt-10 p-10 px-24'>
      <img className='h-12 absolute left-8 top-16' src="/icons/star-1.png" alt="" />
      <div className='h-[80vh] w-2/5'>
      <div className="relative z-10 ">
          <img className="absolute h-[45rem] top-0 translate-x-28 -translate-y-10 left-0 z-10" src="/icons/iPhone-13-Pro-Front-straight.png" alt="iPhone 13 Pro Front" />
        </div>
        <div className="ellipse relative">
            <img className='absolute w-[32rem] -translate-x-16 left-36 top-0' src="/icons/Ellipse.png" alt="" />
            <img className='absolute w-[32rem] -translate-x-16 left-24 top-6' src="/icons/Ellipse.png" alt="" />
            <img className='absolute w-[32rem] -translate-x-16 left-14 top-12' src="/icons/Ellipse.png" alt="" />
        </div>
      </div>
      <div className='text max-w-[35vw] pt-12'>
        <h1 className='text-red-600 text-xl uppercase font-semibold'>Features</h1>
        <h1 className='text-6xl font-black'>uifry Premium</h1>
        <div>
            <div className="logo-heading flex gap-x-4 items-center my-5">
                <img className='h-6' src="/icons/star-05.png" alt="star" />
                <h1 className='font-bold'>Budgeting Intervals</h1>
            </div>
            <p className='font-extralight text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div>
            <div className="logo-heading flex gap-x-4 items-center my-5">
                <img className='h-6' src="/icons/cube-02.png" alt="star" />
                <h1 className='font-bold'>Budgeting Intervals</h1>
            </div>
            <p className='font-extralight text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div>
            <div className="logo-heading flex gap-x-4 items-center my-5">
                <img className='h-6' src="/icons/cube-04.png" alt="star" />
                <h1 className='font-bold'>Budgeting Intervals</h1>
            </div>
            <p className='font-extralight text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
