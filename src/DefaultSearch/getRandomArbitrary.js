import { moviesArray } from "../moviesArray";

export const getRandomArbitrary = () => {
  let r = Math.round(Math.random() * (moviesArray.length - 1));
  return moviesArray[r].title;
};
