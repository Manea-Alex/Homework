import React, { useState } from "react";
import "./charactercard.css";

const CharacterCard = ({ char }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="name">{char.name}</div>
      {isOpen && (
        <ul>
          <li>Birth year: {char.birth_year}</li>
          <li>Eye color: {char.eye_color}</li>
          <li>Gender: {char.gender}</li>
          <li>Hair color: {char.hair_color}</li>
          <li>Height: {char.height}</li>
          <li>Skin color: {char.skin_color}</li>
        </ul>
      )}
    </div>
  );
};

export default CharacterCard;
