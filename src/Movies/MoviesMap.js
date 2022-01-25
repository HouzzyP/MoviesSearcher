import React from "react";
import { Card } from "../Card/Card";
import { IMG_URL } from "../IMG_URL";

export const MoviesMap = ({ movies }) => {
  return (
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
  );
};
