import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./DefaultSearch.css";
import { RequestSearch } from "./RequestSearch";
import { getRandomArbitrary } from "./getRandomArbitrary";
import { IMG_URL } from "../IMG_URL";

export const DefaultSearch = ({ search }) => {
  const [data, setData] = useState();

  useEffect(() => {
    RequestSearch([getRandomArbitrary(), setData]);
  }, [search]);

  return (
    <div className="CardDefault">
      <h3>Random Movie</h3>
      {data === undefined ? (
        <></>
      ) : (
        <div>
          <Card
            props={[
              IMG_URL + data[0].poster_path,
              data[0].title,
              data[0].release_date,
            ]}
          />
        </div>
      )}
    </div>
  );
};
