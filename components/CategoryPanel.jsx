import React from 'react';

const CategoryPanel = ({categories}) => {
  return (
    <div className='flex flex-col min-h-screen w-screen relative'>
      {categories ? 
        (
          <div className='flex flex-col p-4  absolute'>
            {categories.map((category, i) => (
              <div 
                key={i}
                className='p-[3.34px] hover:p-[4.25] hover:bg-green-600/10 hover:pr-8'
              >
                <h1 className='text-green-900 cursor-pointer transition-all ease-in-out hover:scale-105 duration-75 hover:pl-8 hover:font-medium p-2 w-full hover:uppercase'>{category.name}</h1>
              </div>
            ))
            }
          </div>
        )
        :
        (
          <div className='py-2 px-4 rounded-md text-white bg-red-600'>
            <h1>There are no categories in the database!</h1>
          </div>
        )
      }
    </div>
  );
};

export default CategoryPanel;