import logo from "../assets/img/logo.png";
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiFillFastForward } from "react-icons/ai";
import { AiFillFastBackward } from "react-icons/ai";
import mohsenYeganeh from "../assets/img/mohsen-yeganeh.jpg";

const Header = ({audioHandler, setaudioHandler}) => {
  return (
    <header>
      <div className="container h-100">
        <div className="h-100 d-flex align-items-center">
          <div
            className="music-cover d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${mohsenYeganeh})` }}
          >
            <div className="cover-filter"></div>
            <AiFillCaretRight className="key-play" />
          </div>
          <div className="music-description flex-grow-1">
            <div className="d-flex justify-content-between">
              <div className="music-title">
                <h1>Behet Ghol Midam</h1>
                <h2>Mohsen Yeganeh</h2>
              </div>
              <AiOutlineStar className="key-star" />
            </div>
            <div className="music-range ">
              <div className="d-flex justify-content-between">
                <span className="current-time">00:35</span>
                <span className="full-time">03:34</span>
              </div>
              <input className="w-100" type="range" />
            </div>
            <div className="music-nav d-flex  h-100">
              <button className="btn ">
                <AiFillFastBackward />
              </button>
              <button className="btn"
              onClick={()=>setaudioHandler(!audioHandler)}
              >
                <AiOutlinePauseCircle />
              </button>
              <button className="btn">
                <AiFillFastForward />
              </button>
            </div>
          </div>
          <div className="main-logo h-100 pt-5 align-items-start w-25 d-flex justify-content-end">
            <img src={logo} width="30%" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
