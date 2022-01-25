import { RequestDB } from "../Request/RequestDB";
import React from "react";

export const showMovies = async (prop) => {
  const [search, setLoading, setMovies] = prop;

  if (search === "" || search === undefined) {
    setMovies([]);
    return;
  }

  setLoading(true);

  await RequestDB(search).then((b) => {
    setMovies((movie) => [...movie, b.results]);
  });
  setLoading(false);

  return;
};
