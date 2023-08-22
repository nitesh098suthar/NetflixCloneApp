import React from "react";
// import axios from "../../axios/axios.js";
import { useState, useEffect } from "react";
import axios from "axios";

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

  console.log(popularMovies);

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <>
      <div className="min-h-full bg-black ">
        <h3 className="text-white text-5xl font-bold text-center py-8">
          Popular Movies
        </h3>
        <p className="text-white text-center text-xl tracking-wide">
          Here are some popular movies you gonna love it
        </p>

        <div className="flex overflow-x-auto ">
        {popularMovies.map((ele) => {
          return (
            

                <div className="grid place-items-center">
                    <div className="h-[180px] bg-white w-[300px] mx-10 my-3"></div>
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
