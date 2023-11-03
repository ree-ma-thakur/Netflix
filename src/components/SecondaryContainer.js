import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
