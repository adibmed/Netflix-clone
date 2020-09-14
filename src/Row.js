import React, { useState } from "react";

function Row({ title }) {
  const [movies, setMovies] = useState([]);

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* title */}
      {/* container -> posters */}
    </div>
  );
}

export default Row;
