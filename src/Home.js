import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Results from "./searchResults";
import "./Home.css";
import SoupKitchenTwoToneIcon from "@mui/icons-material/SoupKitchenTwoTone";

function Home() {
  
  const [search, setSearch] = useState("");
  const YOUR_APP_ID = "2b05ff27";
  const YOUR_APP_KEY = "38f79e5c65d0fd0b6e6e03e656ec0eb8";
  const [data, setData] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
   
  };

  
  return (
    <div>
    <div className="header-icon">
      <SoupKitchenTwoToneIcon />
      <div className="header-option">
        <h2>Recipe Search</h2>
      </div>
      </div>
      <center>

      <div className="header-search">
        <input
          className="search-input"
          value={search}
          onChange={changeHandler}
          placeholder="Search here......."
          type="text"
        />
        <SearchIcon
          onClick={submitHandler}
          className="search-icon"
        ></SearchIcon>
       
      </div>
      <hr/>
      {data.length >= 1 ? <Results data={data}/> : null}


     
      </center>
    </div>
  );
}

export default Home;
