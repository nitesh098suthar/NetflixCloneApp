import React from "react";
import logo from "../../assets/Logo/netflix_logo.png";

const Header = () => {
  return (
    <>
      <div
        className="flex justify-between items-center p-4 min-h-screen bg-black/10 bg-cover bg-center w-100"
        style={{
          background: 'url("images/background.jpg")',
          // backgroundSize: "cover",
        }}
      >
        <div>
          <img src={logo} alt="image" className="w-[150px] ml-10 " />
        </div>
        <div className="">
          <input
            type="button"
            value="English"
            className="border-2 rounded-md  px-4 mx-8 py-1 text-sm font-semibold cursor-pointer"
          />
          <input
            type="button"
            value="Sign In"
            className="bg-red-600 px-2 py-1 rounded-md font-semibold text-white text-sm tracking-wide cursor-pointer mr-10"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
