import { useState, useRef, useEffect } from 'react';
import './CharacterCard.css';

function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className="character-img"
      />

      <div className="character-overlay">
        <h3>{character.name}</h3>

        {character.house && <span>{character.house}</span>}
        {character.alternate_names?.[0] && (
          <span>{character.alternate_names[0]}</span>
        )}

        {character.dateOfBirth && <span>{character.dateOfBirth}</span>}

        <div className="more-wrapper">
          <button className="more-btn">Більше інформації →</button>

          <div className="character-info">
            <p>
              <b>Name:</b> {character.name}
            </p>
            {character.alternate_names?.[0] && (
              <p>
                <b>Alternate:</b> {character.alternate_names[0]}
              </p>
            )}
            {character.species && (
              <p>
                <b>Species:</b> {character.species}
              </p>
            )}
            {character.gender && (
              <p>
                <b>Gender:</b> {character.gender}
              </p>
            )}
            {character.house && (
              <p>
                <b>House:</b> {character.house}
              </p>
            )}
            {character.dateOfBirth && (
              <p>
                <b>Date of birth:</b> {character.dateOfBirth}
              </p>
            )}
            {character.yearOfBirth && (
              <p>
                <b>Year of birth:</b> {character.yearOfBirth}
              </p>
            )}
            {character.eyeColour && (
              <p>
                <b>Eye colour:</b> {character.eyeColour}
              </p>
            )}
            {character.hairColour && (
              <p>
                <b>Hair colour:</b> {character.hairColour}
              </p>
            )}
            {character.actor && (
              <p>
                <b>Actor:</b> {character.actor}
              </p>
            )}
            <p>
              <b>Alive:</b> {character.alive ? 'True' : 'False'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
