import React from 'react';

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full p-10'>
      <img src={imgSrc} alt="No notes" className='w-40 h-40 object-contain' />
      <p className='mt-4 text-base font-medium text-gray-600 text-center'>
        {message}
      </p>
    </div>
  );
}

export default EmptyCard;
