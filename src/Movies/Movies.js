import React, { useEffect, useState } from "react";
import "./Movies.css";
import { LoadingMovie } from "../Loading/useLoadingMovie.js";
import { showMovies } from "./showMovies.js";
import { MoviesMap } from "./MoviesMap";

export const Movies = ({ props }) => {
  const search = props;
  const [movies, setMovies] = useState([]);
  const [loadiing, setLoading] = useState(false);

  useEffect(() => {
    setMovies([]);
    showMovies([search, setLoading, setMovies]);
  }, [search]);
  return (
    <div>
      {movies.length === 0 ? (
        <LoadingMovie loadiing={loadiing} search={search} />
      ) : (
        <MoviesMap movies={movies} />
      )}
    </div>
  );
};
