import { useLoading, Circles } from "@agney/react-loading";

import React, { useEffect } from "react";
import "./loading.css";

export const LoadingMovie = ({ loadiing }, { search }) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Circles width="50" />,
  });

  console.log(loadiing);

  if (loadiing === true) {
    return <div className="loading">{indicatorEl}</div>;
  }
  if (loadiing === false && search !== "") {
    <></>;
  }
  return <></>;
};
