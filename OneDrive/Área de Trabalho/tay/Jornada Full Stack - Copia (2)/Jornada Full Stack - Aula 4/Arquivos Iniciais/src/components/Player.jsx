//import React from "react";

import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Player = ({ currentSong }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    console.log("URL do áudio no Player:", currentSong?.audio);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Erro ao tentar tocar o áudio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong?.audio]); // Executa sempre que isPlaying ou a URL da música mudam

  return (
    <div className="player">
      <audio ref={audioRef} src={currentSong?.audio} />
      <div className="player__controllers">
        <Link to={`/song/${currentSong?.id}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faPauseCircle : faCirclePlay}
          onClick={() => setIsPlaying(!isPlaying)}
        />

        <Link to={`/song/${currentSong?.id}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>00:00</p>
        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>
        <p>{currentSong?.duration || '0:00'}</p>
      </div>
    </div>
  );
};

Player.propTypes = {
  currentSong: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    audio: PropTypes.string.isRequired,
    duration: PropTypes.string,
  }).isRequired,
};

export default Player;
