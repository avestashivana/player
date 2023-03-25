import { AiOutlineStar } from "react-icons/ai";


const MusicItem = ({ songs, id, cover, name, artist ,currentSong, setcurrentSong}) => {

const checkActiveSong = () => {
    const activeSong = songs.filter((item) => item.id === id);
    setcurrentSong(activeSong);
  };

  return (
    <div
      onClick={checkActiveSong}
      className="music-item d-flex align-item-center"
    >
      <div
        className="music-cover"
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className="music-desc">
        <h3>{artist}</h3>
        <h5>{name}</h5>
      </div>
      <div className="music-options ">
        <span>2:45</span>
        <AiOutlineStar />
      </div>
    </div>
  );
};

export default MusicItem;
