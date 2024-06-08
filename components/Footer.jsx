import React from 'react'

const Footer = () => {
  return (
    <div className='flex mx-auto gap-x-24 py-20 px-40 text-black h-full overflow-hidden max-w-full'>
      <div className='icon-mail-phone'>
            <div className="logo flex gap-3 my-5">
                <img className='h-7' src="/icons/main-icon.png" alt="" />
                <img className='h-7' src="/icons/vector-main.png" alt="" />
            </div>
            <div className='email flex gap-3 my-5'>
                <img className='h-6' src="/icons/email-icon-frame.png" alt="email-icon" />
                <p className='font-semibold'>Help@frybix.com</p>
            </div>
            <div className='phone flex gap-3 my-5'>
                <img className='h-6' src="/icons/call-icon-footer.png" alt="call-icon" />
                <p className='font-semibold'>+1 234 456 678 89</p>
            </div>
      </div>
      <div className='links'>
        <h1 className='text-3xl font-black'>Links</h1>
        <div className='flex flex-col gap-5 font-semibold  mt-3'>
            <a href="#">Home</a>
            <a href="#">Aboutus</a>
            <a href="#">Booking</a>
            <a href="#">Blog</a>
        </div>
      </div>
      <div className='legal'>
      <h1 className='text-3xl font-black'>Legal</h1>
        <div className='flex flex-col gap-5 font-semibold  mt-3'>
            <a href="#">Terms Of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
        </div>
      </div>
      <div className='product'>
      <h1 className='text-3xl font-black'>Product</h1>
        <div className='flex flex-col gap-5 font-semibold  mt-3'>
            <a href="#">Take Tour</a>
            <a href="#">Live Chat</a>
            <a href="#">Reveiws</a>
        </div>
      </div>
      <div className='newsteller'>
      <h1 className='text-2xl font-black'>Newsteller</h1>
        <div className='flex flex-col gap-5 font-semibold mt-3'>
            <a className='' href="#">Stay Up To Date</a>
            <div className="mail-box flex">
                <input className='border-2 border-black outline-none rounded-lg' type="email" name="mail" id="mail" placeholder='Your Email'/>
                <div className='bg-black text-white p-4 rounded-lg'>Subscribe</div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
