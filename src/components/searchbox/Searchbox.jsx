import React from "react";

import "./Searchbox.styles.scss";

const Searchbox = ({handleChange}) => {
  return <input 
  className="searchbox"
  placeholder="What are we looking for, mate?"
  onChange={handleChange}
  />;
};

export default Searchbox;
