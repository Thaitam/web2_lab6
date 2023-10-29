import React from 'react'
const urlLogo = 'https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/14f148d28df88bc5dbbabbfbb1332792.png'

const ContactForm = () => {
  return (
    // Tạo form liên hệ cho người dùng nhập vào họ và tên, email, số điện thoại
    <div className='flex flex-col items-center justify-center mt-10 rounded-lg border-2 container shadow-lg mb-10'>
      <div className='w-full bg-[#e0062d] rounded-t-lg relative h-16 overflow-hidden'>  
        <img src={urlLogo} alt="logo" className="h-16 absolute"/>
      </div>
      <h1 className='text-2xl font-bold'>Để lại liên hệ</h1>
      <form className='flex flex-col justify-center'>
        <input type="text" placeholder='Fullname' className='border-2 border-black rounded-lg px-2 py-1 mt-2 w-60'/>
        <input type="email" placeholder='Email' className='border-2 border-black rounded-lg px-2 py-1 mt-2'/>
        <input type="tel" placeholder='Phone' className='border-2 border-black rounded-lg px-2 py-1 mt-2'/>
        <textarea placeholder='Message' className='border-2 border-black rounded-lg px-2 py-1 mt-2'/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mb-4'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
