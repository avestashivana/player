import { BsMusicNoteList } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineAntDesign } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import logo from '../assets/img/logo1.png'
import { AiFillCopyrightCircle } from "react-icons/ai";

const SideBar = () => {
  return (
    <aside className="h-100 px-3 d-flex flex-column justify-content-around">
      <div className="sidebar-logo d-flex align-items-center py-3">
        <img src={logo} width="14%" />
        <h2 className="px-3 ">Music Player </h2>
      </div>
      <nav>
        <ul>
          <li>
            <a className="active">
              <BsMusicNoteList />
              <span>all Songs</span>
            </a>
          </li>
          <li>
            <a>
              <AiTwotoneStar />
              <span>favorite Songs</span>
            </a>
          </li>
          <li>
            <a>
              <AiFillThunderbolt />
              <span>top Player Songs</span>
            </a>
          </li>
          <li>
            <a>
              <AiOutlineHeart />
              <span>popular Songs</span>
            </a>
          </li>
          <li>
            <a>
              <AiOutlinePhone />

              <span>contact Us</span>
            </a>
          </li>
          <li>
            <a>
              <AiOutlineAntDesign />
              <span>Aboute Us</span>
            </a>
          </li>
        </ul>
      </nav>
      <p>
        <AiFillCopyrightCircle  />
        copy right by Avesta 2022</p>
    </aside>
  );
};

export default SideBar;
