import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='max-w-[90vw] flex gap-x-10 justify-around my-10 mb-10 '>
            
            <div className="main-nav flex gap-5 items-center">
                <div className="logo flex gap-3 mx-9">
                    <img className='h-7' src="/icons/main-icon.png" alt="" />
                    <img className='h-7' src="/icons/vector-main.png" alt="" />
                </div>
                <a href="">Home</a>
                <a href="">Aboutus</a>
                <a href="">Pricing</a>
                <a href="">Feature</a>
            </div>

            <div className="button">
                <button className="bg-black text-white px-5 py-2 rounded-md">Download</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
