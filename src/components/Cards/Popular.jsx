import React from "react";
import axios from "../../axios/axios.js";
import {useState, useEffect} from "react";



const Popular = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [isError, setIsError] = useState([])

    const getPopularMovies = async()=>{
        try{
            const res = await axios.get("/popular" + `/${ec013bddc86ff0a6a85b009b9cee9207}`);
            console.log(res);
            setPopularMovies(res)
            
    
        }
        catch(error){
    
            setIsError(error.message);
    
        }
    }

    useEffect(()=>{
        getPopularMovies();
    }, [])
    

    
  return (
    <>
      <div className="min-h-full bg-black ">
        <h3 className="text-white text-5xl font-bold text-center py-8">
          Popular Movies
        </h3>
        <p className="text-white text-center text-xl tracking-wide">Here are some popular movies you gonna love it</p>

        <div className="flex p-8">
          <div className="grid place-items-center">
            <div className="h-[180px] bg-white w-[300px] mx-10 my-3"></div>
            <h1 className="text-white font-bold text-xl tracking-wide">Hero</h1>
          </div>
          <div className="grid place-items-center">
            <div className="h-[180px] bg-white w-[300px] mx-10 my-3"></div>
            <h1 className="text-white font-bold text-xl tracking-wide">Hero</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
