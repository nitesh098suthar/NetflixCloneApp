import React from "react";

const Body = () => {
  return (
    <>
      <div className="grid place-items-center relative top-60">
        <h1 className="text-white text-5xl font-black">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white text-3xl tracking-wide my-5">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-white text-xl tracking-wide ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <span>
          <input
            type="text"
            placeholder="Email address"
            className="p-4 m-2 w-96 bg-black/60 rounded-lg border-[1px] border-white/70 text-white"
          />
          <input
            type="button"
            value="Get started"
            className="bg-red-600 text-white my-5 p-4 px-10 text-xl font-bold tracking-wide rounded-lg cursor-pointer   "
          />
        </span>
      </div>
    </>
  );
};

export default Body;
