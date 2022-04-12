import React, { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    document.title = "Favorites";
  });
  return (
    <div>
      <p>This is my Favorites</p>
    </div>
  );
};

export default Favorites;
