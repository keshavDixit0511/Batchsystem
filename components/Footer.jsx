import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row mx-auto gap-y-10 lg:gap-x-24 py-10 lg:py-20 px-6 md:px-16 lg:px-40 text-black h-full overflow-hidden max-w-full'>
      <div className='icon-mail-phone flex flex-col items-center lg:items-start'>
        <div className="logo flex gap-3 my-5">
          <img className='h-7' src="/icons/main-icon.png" alt="" />
          <img className='h-7' src="/icons/vector-main.png" alt="" />
        </div>
        <div className='email flex gap-3 my-5'>
          <img className='h-6' src="/icons/email-icon-frame.png" alt="email-icon" />
          <p className='font-semibold text-center lg:text-left'>Help@frybix.com</p>
        </div>
        <div className='phone flex gap-3 my-5'>
          <img className='h-6' src="/icons/call-icon-footer.png" alt="call-icon" />
          <p className='font-semibold text-center lg:text-left'>+1 234 456 678 89</p>
        </div>
      </div>
      <div className='links flex flex-col items-center lg:items-start'>
        <h1 className='text-2xl md:text-3xl font-black'>Links</h1>
        <div className='flex flex-col gap-5 font-semibold mt-3 text-center lg:text-left'>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Booking</a>
          <a href="#">Blog</a>
        </div>
      </div>
      <div className='legal flex flex-col items-center lg:items-start'>
        <h1 className='text-2xl md:text-3xl font-black'>Legal</h1>
        <div className='flex flex-col gap-5 font-semibold mt-3 text-center lg:text-left'>
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
      <div className='product flex flex-col items-center lg:items-start'>
        <h1 className='text-2xl md:text-3xl font-black'>Product</h1>
        <div className='flex flex-col gap-5 font-semibold mt-3 text-center lg:text-left'>
          <a href="#">Take Tour</a>
          <a href="#">Live Chat</a>
          <a href="#">Reviews</a>
        </div>
      </div>
      <div className='newsletter flex flex-col items-center lg:items-start'>
        <h1 className='text-2xl md:text-2xl lg:text-3xl font-black'>Newsletter</h1>
        <div className='flex flex-col gap-5 font-semibold mt-3 text-center lg:text-left'>
          <a className='' href="#">Stay Up To Date</a>
          <div className="mail-box flex flex-col md:flex-row items-center gap-2 lg:gap-0">
            <input className='border-2 border-black outline-none rounded-lg p-2 w-full lg:w-auto' type="email" name="mail" id="mail" placeholder='Your Email'/>
            <div className='bg-black text-white p-2 lg:p-3 rounded-lg mt-2 md:mt-0'>Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
