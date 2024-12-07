import React from 'react'
import login_background from "../../assets/images/signup_background.jpeg";
import icon_loginEmail from "../../assets/images/icon_loginEmail.png";
import { Link } from 'react-router-dom';
export const GetEmailForOtp = () => {
  return (
    <div className="flex items-center justify-center h-screen !p-2 sm:!p-4" data-testid="enterEmailForgotPassword">
  
    <div
      className="flex items-center justify-center w-full h-full  !p-2 bg-no-repeat bg-cover sm:!p-3 rounded-3xl"
      style={{ backgroundImage: `url(${login_background})`}}
    >
      <section className="w-full max-w-[646.14px] m-auto rounded-2xl h-[240px] md:h-[329px] xs:h-[270px] flex flex-col justify-between">

        <div >
          {/* login and Subtitle */}
          <p className="font-[700] text-[28px] text-[#1F2937]  md:text-[45.7px]">Forget Password</p>
          <p className="font-[400] text-[16px] md:text-[20px] text-[#718096]">
          Enter Your Email Address
          </p>
        </div>
  
        {/* Input Section */}
  {/* email input */}
  <div className="relative  flex flex-col w-full gap-[25px] md:gap-7">
    <input
      type="email"
      placeholder="Your Email"
      className="w-full h-10 md:h-12 border-[1.27px] border-[#CBD5E0] py-2.5 px-5 gap-4 text-[#718096] text-[15px] md:tesxt-[20px] rounded-2xl pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <img
      src={icon_loginEmail}
      alt="Icon"
      className="absolute w-[18px] md:w-[25.39px] h-[18px] md:h-[25.39px] color-[#718096] transform -translate-y-1/2 left-4 top-1/2"
    />
  </div>
       
  
        {/* Button */}
       <Link to='/auth/reset-password' className='no-underline'>
       <button className="block w-full h-10 sm:h-12 md:h-[60px] font-[600] text-white bg-[#8712C2] rounded-2xl">
        Login
        </button>
       </Link>
      </section>
    </div>
  </div>
  )
}
