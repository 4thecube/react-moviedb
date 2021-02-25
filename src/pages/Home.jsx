import React, { useState, useEffect } from "react";
import axios from 'axios';

import Searchbox from '../components/searchbox/Searchbox';
import CardList from '../components/card-list/CardList';

import './Home.styles.scss';

const API_KEY = "?&apikey=aa5d2c38";
const URL = "http://www.omdbapi.com/";

const Home = () => {
    const [search, setSearch] = useState("");
    const [films, setFilms] = useState();

    useEffect(() => {
      const getFilms = async () => {
        const { data } = await axios.get(
          `${URL}${API_KEY}&s=${!search ? "iron%20man" : search}`
        );
        const films = data.Search;
        setFilms(films);
      };
      getFilms();
    }, [search]);

    
    const handleChange = (e) => {
        setSearch(e.target.value);
      };
  return (
    <>
      <h1 className="home-title">MovieDB with React and OMDb API</h1>
      <Searchbox handleChange={handleChange} />
      {!search ? (
        <h4 className="home-search-warning">
          * Please, pay attention to the letter case
        </h4>
      ) : null}
      {films !== undefined ? <CardList films={films} /> : null}
    </>
  );
};

export default Home;
