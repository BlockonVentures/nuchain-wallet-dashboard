import React from "react";
import EditIcon from "../../assets/images/edit.png";
import { useNavigate } from "react-router-dom";

export const PersonalInfoForm = ({ role }) => {
  console.log("role", role);
  const navigate = useNavigate();
  return (
    <div className="px-4 ">
      <div className="bg-white shadow-lg rounded-[10px] py-8 px-6 sm:px-10 flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="lg:w-1/3">
          <h1 className="text-xl sm:text-2xl font-bold text-[#15162B] mb-4">
            Personal Info
          </h1>
          <p className="text-sm sm:text-base text-[#868686]">
            Update or change about yourself so everyone knows who you are.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3">
          <form className="space-y-6">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm sm:text-base font-semibold text-[#15162B] mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Lark William"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md text-sm sm:text-base text-[#15162B] placeholder-[#868686] focus:ring-2 focus:ring-[#15162B] focus:outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm sm:text-base font-semibold text-[#15162B] mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Lark William"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md text-sm sm:text-base text-[#15162B] placeholder-[#868686] focus:ring-2 focus:ring-[#15162B] focus:outline-none"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-semibold text-[#15162B] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md text-sm sm:text-base text-[#15162B] placeholder-[#868686] focus:ring-2 focus:ring-[#15162B] focus:outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm sm:text-base font-semibold text-[#15162B] mb-2"
              >
                Mobile No.
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="+91 918989898"
                className="w-full px-4 py-3 border border-[#E5E7EB] rounded-md text-sm sm:text-base text-[#15162B] placeholder-[#868686] focus:ring-2 focus:ring-[#15162B] focus:outline-none"
              />
            </div>

            {/* Role Section */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <label className="block text-sm sm:text-base font-semibold text-[#15162B]">
                  Role
                </label>
                <p className="text-sm sm:text-base text-[#15162B] mb-0">
                  {role === "User" ? (
                    <input
                      type="email"
                      id="email"
                      placeholder="Manager"
                      className="w-full px-2 py-3  text-sm sm:text-base text-[#15162B] placeholder-[#868686]  focus:outline-none"
                    />
                  ) : (
                    "Admin"
                  )}
                </p>
              </div>

              {role === "Admin" && (
                <button
                  type="button"
                  className="bg-[#15162B] text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-opacity-90"
                  onClick={() => navigate("/profile/add-user")}
                >
                  Add New User
                </button>
              )}
            </div>

            {/* Edit Password Section */}
            <div className="flex items-center gap-2">
              <p className="text-sm sm:text-base font-semibold text-[#15162B] mb-0">
                Edit Password
              </p>
              <div className="w-4 h-4">
                <img src={EditIcon} alt="editIcon" />
              </div>
              <button
                type="button"
                className="text-sm sm:text-base text-blue-500 underline hover:text-blue-700"
              >
                <i className="fas fa-pen"></i>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-[#15162B] text-white px-6 py-2 rounded-lg text-sm sm:text-base hover:bg-opacity-90"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="text-sm sm:text-base text-[#868686] hover:underline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
