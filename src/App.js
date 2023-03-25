import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main/Main";
import { useState, useRef, useEffect } from "react";

//my songs list
import musicsList from "./util";

//impoet  MY scss file
import "./assets/style/index.scss";

function App() {
  const [songs, setsongs] = useState(musicsList());
  const [audioHandler, setaudioHandler] = useState(false);
  const [currentSong, setcurrentSong] = useState([]);

  console.log(currentSong)

  //use ref
  const audioRef = useRef();

  //use efect
  useEffect(() => {
    if (audioHandler) audioRef.current.play();
    else audioRef.current.pause();
  }, [audioHandler]);

  return (
    <div className="App">
      <Header audioHandler={audioHandler} setaudioHandler={setaudioHandler} />
      <audio ref={audioRef} src={songs[0].audio}></audio>
      <main className="container">
        <div className="row">
          <div className="col-md-4">
            <SideBar />
          </div>
          <div className="col-md-8">
            <Main 
               songs={songs}
               currentSong={currentSong}
               setcurrentSong={setcurrentSong}
               />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
