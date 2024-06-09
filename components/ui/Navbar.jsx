import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='max-w-[100vw] sm:max-w-[90vw] flex gap-x-3 sm:gap-x-10 justify-around my-10 mb-10 m-2'>
            
            <div className="main-nav flex gap-2 text-xs sm:text-base sm:gap-5 items-center">
                <div className="logo flex gap-1 sm:gap-3 mx-2 sm:mx-9">
                    <img className='h-5 sm:h-7' src="/icons/main-icon.png" alt="" />
                    <img className='h-5 sm:h-7' src="/icons/vector-main.png" alt="" />
                </div>
                <a href="">Home</a>
                <a href="">Aboutus</a>
                <a href="">Pricing</a>
                <a href="">Feature</a>
            </div>

            <div className="button">
                <button className="bg-black text-xs sm:text-base text-white px-2 py-1 sm:py-2 sm:px-5 rounded-md">Download</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
