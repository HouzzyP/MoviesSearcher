import React from "react";
import axios from "axios";

const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const API_KEY = "9434e34a30bf107eddabf30e6ae759ef";

export const RequestDB = async (search) => {
  if (search === undefined || search === "") {
    return undefined;
  }
  let data = await axios.get(URL + API_KEY + "&query=" + search);
  return data.data;
};
