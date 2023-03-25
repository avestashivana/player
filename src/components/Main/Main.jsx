import { useState } from "react";
import MusicItem from "./MusicItem";

const Main = ({ songs,currentSong, setcurrentSong }) => {
  return (
    <main>
      {songs.map((item) => (
        <MusicItem
          cover={item.cover}
          name={item.name}
          artist={item.artist}
          id={item.id}
          songs={songs}
          currentSong={currentSong}
          setcurrentSong={setcurrentSong}
        />
      ))}
    </main>
  );
};

export default Main;
