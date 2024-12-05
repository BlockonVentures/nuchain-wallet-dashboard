import React, { useState } from 'react'

import search_userManageMent from '../../src/assets/images/search_userManageMent.png'
import export_userManagement from '../../src/assets/images/export_userManagement.png'

import { Pagination_User_manageMent } from '../components/Pagination_User_manageMent';


export const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([
    {
      walletAddress: 'Ojh....394857hf',
      cardNumber: '09362...93287',
      stakingAmount: '$10,327.3',
      rewards: '$500',
      stakedOn: '10/10/2024',
      lastLogin: '10/10/2024',
      status: 'Active',
    },
    {
      walletAddress: 'Ojh....394857hf',
      cardNumber: '09362...93287',
      stakingAmount: '$10,327.3',
      rewards: '$500',
      stakedOn: '10/10/2024',
      lastLogin: '12/03/2024',
      status: 'Inactive',
    },
    {
      walletAddress: 'Ojh....394857hf',
      cardNumber: '09362...93287',
      stakingAmount: '$10,327.3',
      rewards: '$500',
      stakedOn: '10/10/2024',
      lastLogin: '12/03/2024',
      status: 'Inactive',
    },
    {
      walletAddress: 'Ojh....394857hf',
      cardNumber: '09362...93287',
      stakingAmount: '$10,327.3',
      rewards: '$500',
      stakedOn: '10/10/2024',
      lastLogin: '12/03/2024',
      status: 'Inactive',
    },
    {
      walletAddress: 'Ojh....394857hf',
      cardNumber: '09362...93287',
      stakingAmount: '$10,327.3',
      rewards: '$500',
      stakedOn: '10/10/2024',
      lastLogin: '12/03/2024',
      status: 'Inactive',
    },
    {
      walletAddress: 'Ojh....394857hf',
      cardNumber: '09362...93287',
      stakingAmount: '$10,327.3',
      rewards: '$500',
      stakedOn: '10/10/2024',
      lastLogin: '12/03/2024',
      status: 'Inactive',
    },
    // Add more sample entries here...
  ]);


  // Filtered Data
  const filteredUsers = users.filter((user) =>
    user.walletAddress.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // pagination logic
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

 
  // table head
  const classname="font-Poppins  font-semibold	text-[#000000] leading-[14.71px] pb-3 text-[8.41px]"


  return (

 <div className="min-h-screen p-6 bg-gray-100" data-testid="user-ManageMent ">
  
 <div className="p-6 bg-white rounded-lg shadow-md">

  
        {/* top section */}
<section className='flex justify-between'>
<p className="mb-4 text-lg font-semibold font-Poppins text-[#15162B]">User Activity</p>
<div className="relative">
<select name="All Users"  className='w-[138px] rounded-md border-[1.05px] py-1 px-4 bg-[#FFFFFF] border-[#ECECEC] border-solid' >
<option value="">All Users</option>
<option value="dsafsdf">sdfdsf</option>
</select>
    </div>


</section>




        {/* Search and Actions */}
 <div className="flex flex-col items-center justify-between mb-8 sm:flex-row mt-[55px]">

     {/* search  */}
     <div className="flex items-center pl-2 border-2 rounded-md w-60 ">
  <img 
    src={search_userManageMent}
    alt="Search Icon" 
    className="w-3 h-3 text-gray-500"
  />
  <input
    type="text"
    placeholder="Search User"
    className="w-full ml-2 h-[30px]  outline-none py-2.5 px-2 text-2.5 font-Inter font-medium	text-[#6B7280]	"
  />
</div>

<div className="flex items-center gap-[3px] rounded border-[0.75px] py-[3px] px-3 ">
  <img src={export_userManagement} alt="export_userManagement" className='w-3 h-3'/>

 <button className=" p-2 font-medium rounded-lg font-Poppins text-[9px] text-[#1F2937]">
              Export All Users
 </button>
 </div>
 
 </div>



{/* table */}
        <div className="overflow-x-auto rounded-[6px] border-2 border-solid border-red-300">
          <table className="w-full text-center ">
            <thead >
              <tr>
                <th className={classname}>Wallet Address</th>
                <th className={classname}>Card Number</th>
                <th className={classname}>Staking Amount</th>
                <th className={classname}>Rewards</th>
                <th className={classname}>Staked On</th>
                <th className={classname}>Last Login</th>
                <th className={classname}>Status</th>
                <th className={classname}>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50" >
                  <td className="font-medium	font-Poppins text-[10.5px] leading-[14.71px] text-[#000000]">{user.walletAddress}</td>
                  <td className="font-medium	font-Poppins text-[9px] leading-[14.71px] text-[#A1247C] py-1.5 px-2 rounded-md"  data-testid={`user-ManageMenttt-${index}`}>{user.cardNumber}</td>
                  <td className="font-normal	font-Poppins text-[8.41px] leading-[14.71px] text-[#000000] ">{user.stakingAmount}</td>
                  <td className="font-normal	font-Poppins text-[8.41px] leading-[14.71px] text-[#000000] ">{user.rewards}</td>
                  <td className="font-normal	font-Poppins text-[8.41px] leading-[14.71px] text-[#000000] ">{user.stakedOn}</td>
                  <td className="font-normal	font-Poppins text-[8.41px] leading-[14.71px] text-[#000000] ">{user.lastLogin}</td>
                  <td
                  className={`font-normal font-Poppins text-[8.41px] leading-[14.71px] ${
                    user.status === 'Active' ? 'text-[#0AF414]' : 'text-[#EB6825]'
                  }`}
                  >
                    {user.status}
                  </td>
                  <td className="font-medium	font-Poppins text-[9px] leading-[14.71px] text-[#4E2C9E] ">
                    Check
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        {/* Pagination */}
        <div className="flex items-center justify-end mt-4 rounded-lg m-end h-11">
          <Pagination_User_manageMent
            totalPages={Math.ceil(filteredUsers.length / itemsPerPage)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>

  )
}
