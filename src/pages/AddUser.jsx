import React from "react";
import { PersonalInfoForm } from "../components/pofilesectiontap/PersonalInfoForm";

export const AddUser = () => {
  const handleSave = () => alert("Save Changes");
  const handleCancel = () => alert("Cancel Changes");
  return (
    // <div className="!px-2 sm:!px-8">
    //   <div className="bg-white shadow-md rounded-[20px] py-4 px-3 sm:py-8 sm:px-9 ">
    //     <div className="flex flex-col justify-between gap-5 md:flex-row ">
    //       <section className="w-auto md:w-80 ">
    //         <p className="font-bold font-Cabinet Grotesk text-[#15162B] text-xl sm:text-2xl">
    //           Personal Info
    //         </p>
    //         <p className="text-[#868686] font-Satoshi text-sm sm:text-base">
    //           Update or change about yourself so everyone know who you are.
    //         </p>
    //       </section>

    //       <form className="w-full space-y-[32px]">
    //         <div className="space-y-[30px]">
    //           <div>
    //             <label
    //               htmlFor="admin-first-name"
    //               className="block text-[16px] sm:text-xl font-semibold text-[#15162B] text-[Montserrat] mb-[10px]"
    //             >
    //               First Name
    //             </label>
    //             <input
    //               type="name"
    //               id="admin-first-name"
    //               placeholder="Lark William"
    //               className="py-[8px] px-[10px] sm:px-4 sm:py-3.5 xs:py-[12px] xs:px-[10px] w-full rounded-lg border-[1px] border-[#E5E7EB]  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] focus:outline-none text-[#868686] font-Montserrat"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="admin-last-name"
    //               className="block text-[16px] sm:text-xl font-semibold text-[#15162B] text-[Montserrat] mb-[10px]"
    //             >
    //               Last Name
    //             </label>
    //             <input
    //               type="name"
    //               id="admin-last-name"
    //               placeholder="Lark William"
    //               className="py-[8px] px-[10px] sm:px-4 sm:py-3.5 xs:py-[12px] xs:px-[10px] w-full rounded-lg border-[1px] border-[#E5E7EB]  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] focus:outline-none text-[#868686] font-Montserrat"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="admin-email"
    //               className="block text-[16px] sm:text-xl font-semibold text-[#15162B] text-[Montserrat] mb-[10px]"
    //             >
    //               Email Address
    //             </label>
    //             <input
    //               type="email"
    //               id="admin-email"
    //               placeholder="abc@gmail.com"
    //               className="py-[8px] px-[10px] sm:px-4 sm:py-3.5 xs:py-[12px] xs:px-[10px] w-full rounded-lg border-[1px] border-[#E5E7EB]  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] focus:outline-none text-[#868686] font-Montserrat"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="admin-mobile"
    //               className="block text-[16px] sm:text-xl font-semibold text-[#15162B] text-[Montserrat] mb-[10px]"
    //             >
    //               Mobile No.
    //             </label>
    //             <input
    //               inputMode="numeric"
    //               pattern="\d*"
    //               id="admin-mobile"
    //               placeholder="+91 898989898"
    //               className="py-[8px] px-[10px] sm:px-4 sm:py-3.5 xs:py-[12px] xs:px-[10px] w-full rounded-lg border-[1px] border-[#E5E7EB]  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] focus:outline-none text-[#868686] font-Montserrat"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="admin-role"
    //               className="block text-[16px] sm:text-xl font-semibold text-[#15162B] text-[Montserrat] mb-[10px]"
    //             >
    //               Role
    //             </label>
    //             Admin
    //             {/* <input
    //               inputMode="numeric"
    //               pattern="\d*"
    //               id="admin-mobile"
    //               placeholder="+91 898989898"
    //               className="py-[8px] px-[10px] sm:px-4 sm:py-3.5 xs:py-[12px] xs:px-[10px] w-full rounded-lg border-[1px] border-[#E5E7EB]  shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] focus:outline-none text-[#868686] font-Montserrat"
    //             /> */}
    //           </div>
    //         </div>

    //         <div className="flex items-center h-12 gap-4 w-60">
    //           <button
    //             type="submit"
    //             className="w-36 h-9 text-[14px] sm:w-48 sm:h-11 xs:text-[16px] sm:text-[20px]  font-bold text-[#FFFFFF] bg-black rounded-md font-Satoshi flex items-center justify-center"
    //           >
    //             Save Changes
    //           </button>

    //           <button className="text-[16px] text-black rounded-md hover:underline xs:text-base ">
    //             Cancel
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <PersonalInfoForm
      role="User"
      onSave={handleSave}
      onCancel={handleCancel}
      showAddUser={true}
    />
  );
};
