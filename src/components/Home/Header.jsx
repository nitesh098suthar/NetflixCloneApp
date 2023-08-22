import React from "react";
import logo from "../../assets/Logo/netflix logo.png";

const Header = () => {
  return (
    <>
      <div className=" flex justify-between items-center p-4 relative top-0 left-0 ">
        <div>
          <img src={logo} alt="image" className="w-[150px] ml-10 " />
        </div>
        <div className="">
          <input
            type="button"
            value="English"
            className="border-[1px] rounded-md p-2 px-10 mx-8 text-sm font-semibold cursor-pointer text-white"
          />
          <input
            type="button"
            value="Sign In"
            className="bg-red-600 p-2 px-10 rounded-md font-bold text-white text-sm tracking-wide cursor-pointer mr-10"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
