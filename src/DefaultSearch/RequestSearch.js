import { RequestDBDefault } from "../Request/RequestDB";

export const RequestSearch = async (prop) => {
  const [name, setData] = prop;
  console.log(name);
  setData(
    await RequestDBDefault(name).then((movie) => {
      return movie.results;
    })
  );
};
