import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div className=" ">
      <div className="absolute -z-10 opacity-95">
        <img
          src= {BG_URL}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
};

export default GPTSearch;
