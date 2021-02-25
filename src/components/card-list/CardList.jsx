import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardList.styles.scss";

const CardList = ({ films }) => {
  const [hovered, setHovered] = useState({ hovered: false });
  const NOT_AVAILABLE_PHOTO =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  return (
    <div className="card-list-grid-container">
      {films.length ? (
        films.map((film) => (
          <div
            key={film.imdbID}
            className="card-list"
            onMouseOver={() => setHovered({ ...hovered, [film.imdbID]: true })}
            onMouseLeave={() =>
              setHovered({ ...hovered, [film.imdbID]: false })
            }
          >
            <Link to={`${film.imdbID}`}>
              <img
                src={film.Poster === "N/A" ? NOT_AVAILABLE_PHOTO : film.Poster}
                alt={`Poster ${film.Title}`}
                className="card-list-poster"
              />
            {hovered[film.imdbID] ? (
              <div className="card-list-additional-info">
                <span className="card-list-title">{film.Title}</span>
                <span className="card-list-year">{film.Year}</span>
              </div>
            ) : null}
            </Link>
          </div>
        ))
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
};

export default CardList;
