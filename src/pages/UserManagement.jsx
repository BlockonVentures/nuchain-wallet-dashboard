import React from 'react'

export const UserManagement = () => {

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
    // Add more sample entries here...
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filtered Data
  const filteredUsers = users.filter((user) =>
    user.walletAddress.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);


  return (

 <div className="min-h-screen p-6 bg-gray-100" data-testid="user-ManageMent">

  
      <div className="p-6 bg-white rounded-lg shadow-md">
<h1 className="mb-4 text-xl font-bold">User Activity</h1>

        {/* Search and Actions */}
        <div className="flex flex-col items-center justify-between mb-6 sm:flex-row">
          <input
            type="text"
            placeholder="Search User"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg sm:w-1/3 sm:mb-0"
          />
</div>

<div className="flex items-center gap-[3px] rounded border-[0.75px] py-[3px] px-3">
  <img src={export_userManagement} alt="export_userManagement" className='w-3 h-3'/>

 <button className="px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 font-Poppins text-[9px
] text-[#1F2937]">
              Export All Users
 </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-collapse border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Wallet Address</th>
                <th className="px-4 py-2 border border-gray-300">Card Number</th>
                <th className="px-4 py-2 border border-gray-300">Staking Amount</th>
                <th className="px-4 py-2 border border-gray-300">Rewards</th>
                <th className="px-4 py-2 border border-gray-300">Staked On</th>
                <th className="px-4 py-2 border border-gray-300">Last Login</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">{user.walletAddress}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.cardNumber}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.stakingAmount}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.rewards}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.stakedOn}</td>
                  <td className="px-4 py-2 border border-gray-300">{user.lastLogin}</td>
                  <td
                    className={`border border-gray-300 px-4 py-2 font-bold ${
                      user.status === 'Active' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button className="text-blue-500 hover:underline">Check</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-4">
          {[...Array(Math.ceil(filteredUsers.length / itemsPerPage)).keys()].map(
            (number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number + 1)}
                className={`mx-1 px-4 py-2 rounded-lg ${
                  currentPage === number + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {number + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>


    </div>
  )
}
