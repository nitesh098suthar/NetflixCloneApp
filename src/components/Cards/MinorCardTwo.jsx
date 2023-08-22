import React from "react";
import { imageUrl } from "../../constants/constants";

const MinorCard = ({ arr, title},) => {
  return (
    <>
      <div className="h-[470px] bg-black pt-10">
        <h3 className="text-white text-5xl font-bold text-center py-8 capitalize">
          {`${title}`}
        </h3>
        <p className="text-white text-center text-xl tracking-wide my-3">
          {`Here are some ${title} who is you favorite one ?`}
        </p>

        <div className="flex" style={{ width: "100%", overflowX: "auto" }}>
          {arr.map((ele) => {
            return (
              <div className="grid place-items-center h-[300px]">
                <div className="h-[200px] bg-white w-[150px] mx-10 my-3">
                  <img src={`${imageUrl}${ele.profile_path}`} alt="" />
                </div>
                <div>
                  <h1 className="text-white font-semibold text-xl tracking-wide text-center ">
                    {ele.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MinorCard;
