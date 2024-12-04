import React from 'react'
import Icon_profileSetting from "../../assets/images/Icon_profileSetting.png"
import Icon_profileSignout from "../../assets/images/Icon_signuot.png"
import { Link } from 'react-router-dom'


export const ProfileBar = () => {

    
  return (
    <div
    className="absolute z-50 p-3 bg-white shadow-md w-80 right-9 mt-7 rounded-xl"
  >
    <ul className="flex flex-col px-2  gap-[20px]">
      {/* Profile Settings Link */}
      <li >
          <Link to="/profile" className="flex items-center gap-4 font-medium text-gray-800 no-underline font-Satoshi ">
         <img src={Icon_profileSetting} alt=""  className='w-4 h-4'/>
            Profile Settings
          </Link>
        </li>

        {/* Divider */}
        <hr className="my-1 border-t border-gray-200 h-[2px] bg-black" />

        {/* Sign Out Link */}
        <li >
          <Link to="/profile" className="flex items-center gap-4 font-medium text-gray-800 no-underline font-Satoshi ">
         <img src={Icon_profileSignout} alt=""  className='w-4 h-4'/>
         Sign Out
          </Link>
        </li>
    </ul>
  </div>
  )
}
