import React from "react";

const Movie = ({ match, history }) => {
  return (
    <>
      <h1>Movie {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          history.push("/movies");
        }}
      >
        Save
      </button>
    </>
  );
};

export default Movie;
