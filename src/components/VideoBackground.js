import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { VscUnmute } from "react-icons/vsc";
import { BiVolumeMute } from "react-icons/bi";
import ReactPlayer from "react-player";

const VideoBackground = ({ movieId }) => {
  const [mute, setMute] = useState(true);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  const handleMuteButton = () => {
    setMute(!mute);
  };

  return (
    <div className=" bg-transparent">
      <div className=" w-screen aspect-video">
        <ReactPlayer
          className="w-screen aspect-video"
          url={"https://www.youtube.com/watch?v=" + trailerVideo?.key}
          width="100%"
          height="100%"
          playing={true}
          muted={mute}
          loop={true}
          config={{
            youtube: {
              playerVars: { showinfo: 0, controls: 0 },
            },
          }}
        />
      </div>

      <button
        className="absolute text-white font-extrabold right-5 bottom-5 text-4xl bg-gray-950 rounded-full p-3 bg-opacity-15 hover:bg-gray-700"
        onClick={handleMuteButton}
      >
        {mute ? <BiVolumeMute /> : <VscUnmute />}
      </button>
    </div>
  );
};

export default VideoBackground;
