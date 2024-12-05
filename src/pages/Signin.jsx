import React from "react";
import login_background from "../assets/images/signup_background.jpeg";
import icon_loginEmail from "../assets/images/Icon_loginEmail.png";
import lock_LoginPassword from "../assets/images/lock_LoginPassword.png";


export const Signin = () => {
  return (

<div className="flex items-center justify-center h-screen !p-2 sm:!p-4 "data-testid="Signin" >
  
  <div
    className="flex items-center justify-center w-full h-full !p-2 bg-no-repeat bg-cover sm:!p-3 rounded-3xl"
    style={{ backgroundImage: `url(${login_background})`}}
  >
    <section className="w-full max-w-[646.14px] m-auto rounded-2xl">
      <div >
        {/* login and Subtitle */}
        <p className="font-[700] text-[28px] text-[#1F2937]  md:text-[45.7px]">Login</p>
        <p className="font-[400] text-[16px] md:text-[20px] text-[#718096]">
          Welcome back, you’ve been missed!
        </p>
      </div>

      {/* Input Section */}
      <div className="flex flex-col w-full gap-[25px] md:gap-7 h-[234px]">
{/* email input */}
<div className="relative w-full">
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

        {/* passowrd input */}
<div className="relative w-full">
  <input
    type="email"
    placeholder="Your Password"
    className="w-full h-10 md:h-12  border-[1.27px] border-[#CBD5E0] py-2.5 px-5 gap-4 text-[#718096] text-[15px] md:tesxt-[20px] rounded-2xl pl-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <img
    src={lock_LoginPassword}
    alt="Icon"
    className="absolute w-[18px] md:w-[25.39px] h-[18px] md:h-[25.39px] color-[#718096] transform -translate-y-1/2 left-4 top-1/2"
  />
</div>

        <div className="flex items-center justify-between w-full">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 mt-[4.23px] ml-[4.23px] border-[2.54px] text-[#FFFFFF]" />
            Remember Me
          </label>
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>

      {/* Button */}
      <button className="block w-full h-10 sm:h-12 md:h-[60px] font-[600] text-white bg-[#8712C2] rounded-2xl mt-[-30px]">
      Login
      </button>
    </section>
  </div>
</div>

  );
};
