import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import SearchComponent from "./components/Search/SearchComponent";

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchComponent />
    </div>
  );
};

export default App;
