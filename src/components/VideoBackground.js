import React, { useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import ReactPlayer from "react-player";
import { VscUnmute } from "react-icons/vsc";
import { BiVolumeMute } from "react-icons/bi";

const VideoBackground = ({ movieId }) => {
  const [mute, setMute] = useState(true);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailerVideo);
  useMovieTrailer(movieId);

  const handleMuteButton = () => {
    setMute(!mute);
  };
  return (
    <div>
      <button
        className="absolute text-white font-extrabold right-5 bottom-5 text-4xl bg-gray-950 rounded-full p-3 bg-opacity-15 hover:bg-gray-700"
        onClick={handleMuteButton}
      >
        {mute ? <BiVolumeMute /> : <VscUnmute />}
      </button>

      <div className=" w-screen">
        {/* <iframe
        className=" w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}

        {mute ? (
          <ReactPlayer
            className="w-screen aspect-video"
            url={
              "https://www.youtube.com/watch?v=" +
              trailerVideo?.key +
              "?&autoplay=1"
            }
            width="100%"
            height="100%"
            playing={true}
            muted={true}
          />
        ) : (
          <ReactPlayer
            className="w-screen aspect-video"
            url={"https://www.youtube.com/watch?v=" + trailerVideo?.key}
            width="100%"
            height="100%"
            playing={true}
          />
        )}
      </div>
    </div>
  );
};

export default VideoBackground;
