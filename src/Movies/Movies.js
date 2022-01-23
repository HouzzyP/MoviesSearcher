import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { RequestDB } from "../Request/RequestDB";
import "./Movies.css";
const { moviesArray } = require("./moviesArray.js");

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const Movies = ({ props }) => {
  const search = props;
  const [data, setData] = useState(undefined);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();

  const showMovies = async () => {
    if (search === "" || search === undefined) {
      setMovies([]);
      setLoading("");
      return;
    }

    await RequestDB(search).then((b) => {
      setMovies((movie) => [...movie, b.results]);
    });

    return;
  };

  useEffect(() => {
    setMovies([]);

    showMovies();
  }, [search]);
  return (
    <div>
      {movies.length === 0 ? (
        <> {loading} </>
      ) : (
        <ul>
          {movies[0].map((movie, index) => {
            let poster = movie.poster_path;
            if (IMG_URL + poster === null) {
              poster = movie.backdrop_path;
            }
            return (
              <li key={index}>
                {
                  <Card
                    props={[IMG_URL + poster, movie.title, movie.release_date]}
                  />
                }
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
