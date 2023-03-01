import React from "react";
import "./searchbar.css";
import { useState } from "react";
import { useEffect } from "react";
import CharacterCard from "./CharacterCard";

const baseUrl = "https://swapi.dev/api/people/";
const SearchBar = () => {
  const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    fetchMe();
  }, []);

  const fetchMe = (newUrl) => {
    const url = newUrl ?? `${baseUrl}?search=${endPoint}`;

    const options = {
      method: "GET",
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setContainer(data.results);
        setNext(data.next);
        setPrevious(data.previous);
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    e.preventDefault();
    fetchMe();
  };

  return (
    <div>
      <div className="prompt">
        Find out more about your favorite Star Wars Characters!
      </div>
      <form className="form-container" onSubmit={handleChange}>
        <input
          type="text"
          value={endPoint}
          onChange={(e) => setEndPoint(e.target.value)}
          placeholder="Character"
          className="form-input"
        />
        <button type="submit" className="form-submit">
          Search
        </button>
      </form>

      <div className="element">
        {Array.isArray(container) &&
          container !== null &&
          container !== undefined &&
          container.map((item, index) => {
            return (
              <CharacterCard className="card" char={item} key={item.name} />
            );
          })}
      </div>
      {previous && (
        <button
          className="previous"
          onClick={() => {
            fetchMe(previous);
          }}
        >
          Previous
        </button>
      )}
      {next && (
        <button
          className="next"
          onClick={() => {
            fetchMe(next);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default SearchBar;
