import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Card.styles.scss";
const URL_FOR_EXTENDED_DATA = "http://www.omdbapi.com/?&apikey=aa5d2c38&i=";

const Card = (props) => {
  const [dataAboutFilm, setDataAboutFilm] = useState(null);
  const id = props.match.params.imbdID;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${URL_FOR_EXTENDED_DATA}${id}`);
      setDataAboutFilm(data);
    };

    getData();
  }, [id]);

  console.log(props);
  console.log(dataAboutFilm);

  return (
    <div className="card-page">
      {props.location.pathname === "/" ? null : (
        <Link to="/">
          <div className="go-back-button">&#x021B5; go back</div>
        </Link>
      )}
      {dataAboutFilm !== null ? (
        <div className="card-container">
          <div className="card-image">
            <img
              src={dataAboutFilm.Poster}
              alt={`Poster of ${dataAboutFilm.Poster}`}
            />
          </div>
          <div className="card-info">
            <h2>{dataAboutFilm.Title}</h2>
            <span>{dataAboutFilm.Plot}</span>
            <div className="card-rating">
              <span className="imdb-rating">
                <span className="info-title">IMDb rating: </span>
                <span
                  className={`${
                    dataAboutFilm.imdbRating > 9
                      ? "gold"
                      : dataAboutFilm.imdbRating >= 7 &&
                        dataAboutFilm.imdbRating < 9
                      ? "green"
                      : dataAboutFilm.imdbRating >= 5 &&
                        dataAboutFilm.imdbRating < 7
                      ? "orange"
                      : dataAboutFilm.imdbRating < 5
                      ? "red"
                      : null
                  }`}
                >
                  {dataAboutFilm.imdbRating}
                </span>
              </span>
              <span className="imdb-votes">
                <span className="info-title">IMDb votes:</span>{" "}
                {dataAboutFilm.imdbVotes}
              </span>
            </div>
            <span className="info-title">Year: </span>
            <span>{dataAboutFilm.Year}</span>
            <span className="info-title">Country: </span>
            <span>{dataAboutFilm.Country}</span>
            <span className="info-title">Language:</span>
            <span> {dataAboutFilm.Language}</span>
            <span>
              <span className="info-title"> Runtime: </span>
              {dataAboutFilm.Runtime}
            </span>
            <span>
              <span className="info-title">Genre: </span>
              {dataAboutFilm.Genre}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
