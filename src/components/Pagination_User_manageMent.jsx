import React from 'react';
import chevron_left from '../../src/assets/images/chevron_left.png'
import chevron_right from '../../src/assets/images/chevron_right.png'
export const Pagination_User_manageMent = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center w-48 space-x-2 text-sm text-gray-700">

        
      <button
        onClick={handlePrev}
        className={`px-2 py-1 ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
        }`}
        disabled={currentPage === 1}
        data-testid="prev-button_userManagement"
      >
     <img src={chevron_left} alt="" className='w-3 h-3 text-[#4B5563]' />
      </button>


      
      <span className="flex justify-center items-center  bg-white  border-[0.75px]  rounded-lg w-7 h-7 text-[#000000] font-medium	">
        {currentPage}
      </span>
      <span>of </span>
      <span className='font-medium text-[#000000] text-xs	'>{totalPages}</span>



      
      <button
        onClick={handleNext}
        className={`px-2 py-1  ${
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
        }`}
        disabled={currentPage === totalPages}
       data-testid="next-button_userManagement"
      >
    <img src={chevron_right} alt="" className='w-3 h-3 text-[#4B5563]' />
      </button>
    </div>
  );
};
