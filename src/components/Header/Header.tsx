import "./Header.css";
import { useEffect, useState } from "react";

export const Header = () => {
  //console.log(movieData);

  return (
    <div className="headerGeneral">
      <span className="headerList">
        <div className="headerLogo" />
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Recently Added</li>
      </span>
      <span className="headerRight"></span>
    </div>
  );
};
