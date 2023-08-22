import React from "react";

const MoreWatch = () => {
  return (
    <>
      <div className="min-h-[400px] bg-black p-10 text-white grid place-items-center">
       <div className="text-center">
       <h1 className="text-white text-5xl font-bold text-center capitalize">
          There’s even more to watch.
        </h1>
        <p className="text-3xl w-[60%] text-center my-10 m-auto">
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals and more. Watch as much
          as you want, anytime you want.
        </p>
        <input
              type="button"
              value="Join Now"
              className="bg-red-600 text-white my-5 p-4 px-10 text-xl font-bold tracking-wide rounded-lg cursor-pointer   "
            />
       </div>
      </div>
    </>
  );
};

export default MoreWatch;
