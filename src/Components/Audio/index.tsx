import { useEffect, useRef, useState } from "react";
import AudioContainer from "./style";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import data from "./data";

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.1);
  const audioRef = useRef<ReactAudioPlayer>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(
        "audioState",
        JSON.stringify({ currentTrackIndex, currentTime })
      );
    }, 900);

    return () => clearInterval(interval);
  }, [currentTrackIndex, currentTime]);

  useEffect(() => {
    const savedState = localStorage.getItem("audioState");
    if (savedState) {
      const { currentTrackIndex: savedIndex, currentTime: savedTime } =
        JSON.parse(savedState);
      setCurrentTrackIndex(savedIndex);
      setCurrentTime(savedTime);
    }

    setStartTimeFromLocalStorage();
  }, []);

  const setStartTimeFromLocalStorage = () => {
    const savedState = localStorage.getItem("audioState");
    if (savedState) {
      const { currentTime: savedTime } = JSON.parse(savedState);
      setCurrentTime(savedTime);
      if (audioRef.current && audioRef.current.audioEl.current) {
        audioRef.current.audioEl.current.currentTime = savedTime;
      }
    }
  };

  const togglePlay = () => {
    if (audioRef.current && audioRef.current.audioEl) {
      const audioElement = audioRef.current.audioEl.current;
      if (isPlaying) {
        if (audioElement) audioElement.pause();
      } else {
        if (audioElement) audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % data.length);
    setIsPlaying(false);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
    setIsPlaying(false);
  };

  const onEnded = () => {
    playNextTrack();
  };

  const handleListen = (currentTime: number) => {
    setCurrentTime(currentTime);
  };

  const handleVolume = () => {
    if (audioRef.current && audioRef.current.audioEl.current) {
      setCurrentVolume(audioRef.current.audioEl.current.volume);
    }
  };

  return (
    <AudioContainer>
      <div className="display-buttons">
        <button className="btn" onClick={playPreviousTrack}>
          <FontAwesomeIcon size="sm" color="white" icon={faBackwardStep} />
        </button>

        <div className="play-btn-container">
          <div className={`spinner ${!isPlaying && "spinner-hidden"}`} />
          <button className="btn play-btn" onClick={togglePlay}>
            {isPlaying ? (
              <FontAwesomeIcon size="lg" color="white" icon={faPause} />
            ) : (
              <FontAwesomeIcon size="lg" color="white" icon={faPlay} />
            )}
          </button>
        </div>

        <button className="btn" onClick={playNextTrack}>
          <FontAwesomeIcon size="sm" color="white" icon={faForwardStep} />
        </button>
      </div>
      <ReactAudioPlayer
        ref={audioRef}
        src={`assets/music/${data[currentTrackIndex].fileName}`}
        volume={currentVolume}
        controls
        loop={false}
        autoPlay
        onEnded={onEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        listenInterval={1000}
        onListen={handleListen}
        onVolumeChanged={handleVolume}
      />
      <p>{data[currentTrackIndex].name}</p>
    </AudioContainer>
  );
};

export default Audio;
