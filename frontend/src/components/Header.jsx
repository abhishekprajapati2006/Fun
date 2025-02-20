import React from 'react';

const Header = () => {
  return (
    <div className="flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black ">
      <img src="" alt="" className="" />
      <div className="flex items-center">
        <h1 className="">Striver</h1>
        <div className="ml-4">
          <button className="bg-red-800 text-white px-4 py-2">Logout</button>
          <button className="bg-red-800 text-white px-4 py-2 ml-2">Search Movie</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
