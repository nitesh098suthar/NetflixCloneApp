import React from "react";
// import axios from "../../axios/axios.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { imageUrl } from "../../constants/constants";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isError, setIsError] = useState([]);

  const getPopularMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=ec013bddc86ff0a6a85b009b9cee9207`
      );
      const { data } = res;
      const { results } = data;
      setPopularMovies(results);
    } catch (error) {
      setIsError(error.message);
    }
  };

  console.log(popularMovies.poster_path);
  

  useEffect(() => {
    getPopularMovies();
  }, []);


  return (
    <>
      <div className="h-[400px] bg-black ">
        <h3 className="text-white text-5xl font-bold text-center py-8">
          Popular Movies
        </h3>
        <p className="text-white text-center text-xl tracking-wide my-3">
          Here are some popular movies you gonna love it
        </p>

        <div className="flex" style={{width: "100%", overflowX: "auto"}}>
        {popularMovies.map((ele) => {
          return (
            
                <div className="grid place-items-center">
                    <div className="h-[200px] bg-white w-[150px] mx-10 my-3">
                        <img src={`${imageUrl}${ele.poster_path}`} alt="" />
                    </div>
                    <h1 className="text-white font-bold text-xl tracking-wide">
                        Hero
                    </h1>
                </div>

          );
        })}
        </div>
      </div>
    </>
  );
};

export default Popular;
