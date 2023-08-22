import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MinorCard from "./MinorCard.jsx";
import MinorCardTwo from "./MinorCardTwo.jsx";

const api = "https://api.themoviedb.org/3";
const api_key = "ec013bddc86ff0a6a85b009b9cee9207";
const popular = "popular"
const trending = "trending"
const airingToday = "airing_today"
const airingTodayTitle = "airing today"
const topRated = "top_rated"
const topRatedTitle = "top rated"
const person = "person"
const trendingPeopleTitle = "trending people"

const MajorCard = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [airingTodayMovies, setAiringTodayMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingPeople, setTrendingPeople] = useState([]);


  const getPopularMovies = async () => {
    try {
      const res = await axios.get(`${api}/tv/${popular}?api_key=${api_key}`);
      const { data } = res;
      const { results } = data;
      setPopularMovies(results);
    } catch (error) {
      console.log(error)
    }
  };
  const getTrendingMovies = async () => {
    try {
      const res = await axios.get(`${api}/${trending}/tv/day?api_key=${api_key}`);
      const { data } = res;
      const { results } = data;
      setTrendingMovies(results);
    } catch (error) {
      console.log(error)
    }
  };
  const getAiringTodayMovies = async () => {
    try {
      const res = await axios.get(`${api}/tv/${airingToday}?api_key=${api_key}`);
      const { data } = res;
      const { results } = data;
      setAiringTodayMovies(results);
    } catch (error) {
      console.log(error)
    }
  };
  const getTopRatedMovies = async () => {
    try {
      const res = await axios.get(`${api}/tv/${topRated}?api_key=${api_key}`);
      const { data } = res;
      const { results } = data;
      setTopRatedMovies(results);
    } catch (error) {
      console.log(error)
    }
  };
  const getTrendingPeople = async () => {
    try {
      const res = await axios.get(`${api}/trending/${person}/day?api_key=${api_key}`);
      const { data } = res;
      const { results } = data;
      setTrendingPeople(results);
    } catch (error) {
      console.log(error)
    }
  };

  // /trending/person/day?api_key=ec013bddc86ff0a6a85b009b9cee9207

  useEffect(() => {
    getPopularMovies();
    getTrendingMovies();
    getAiringTodayMovies();
    getTopRatedMovies();
    getTrendingPeople();
  }, []);

  return (
    <>
      <div>
        <MinorCard arr={airingTodayMovies} title={airingTodayTitle}/>
        <MinorCard arr={trendingMovies} title={trending} />
        <MinorCard arr={popularMovies} title={popular} />
        <MinorCard arr={topRatedMovies} title={topRatedTitle} />
        <MinorCardTwo arr={trendingPeople} title={trendingPeopleTitle} />
        
      </div>
    </>
  );
};

export default MajorCard;
