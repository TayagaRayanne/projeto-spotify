//import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";
import PropTypes from 'prop-types'; // Importe prop-types

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

SongList.propTypes = {
  songsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SongList;





































/*
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // const items = 5;
  const [items, setItems] = useState(5);

  // items = 10
  // setItems(10)

  // console.log(items);
  // items +=  5

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
          // items += 5;
          // console.log(items);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
*/
