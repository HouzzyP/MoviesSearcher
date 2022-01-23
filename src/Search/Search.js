import "./Search.css";
import React from "react";

export const Search = ({ props }) => {
  const [search, setSearch] = props;

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <div className="box-search">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          autoComplete="on"
          onChange={onChange}
          placeholder="Buscar Pelicula..."
          value={search}
        />
      </form>
    </div>
  );
};
