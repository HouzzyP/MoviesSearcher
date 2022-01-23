import React, { useState } from "react";
import { Title } from "../Title/Title";
import { Search } from "../Search/Search";
import "./App.css";
import { Movies } from "../Movies/Movies";
import { Footer } from "../Footer/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <div className="page">
        <Title />

        <Search props={[search, setSearch]} />
        <Movies props={search} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
