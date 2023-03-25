import { v4 as uuidv4 } from "uuid";

export default function musicList() {
  return [
    {
      id: uuidv4(),
      name: "Taabe Gisoo",
      artist: "Maziyar Falahi",
      cover:
        "https://joyamusic.ir/wp-content/uploads/2021/03/141019395510575959mazyar-fallahi-taabe-gisoo-e1615147419824.jpg",
      active: true,
      audio:
        "https://dl.joyamusic.ir/Album%20Irani/Mazyar%20Fallahi/128/Taabe%20Gisoo-joyamusic-128.mp3",
    },
    {
      id: uuidv4(),
      name: "Bade To",
      artist: "Ehsan Khajeh Amiri ",
      cover:
        "https://dl.joyamusic.ir/Music/1402/01/05/Ehsan-Khajeh-Amiri-Bade-To-JoyaMusic.jpg",
      active: false,
      audio:
        "https://dl.joyamusic.ir/Music/1402/01/05/Ehsan%20Khajeh%20Amiri%20-%20Bade%20To.mp3",
    },
    {
      id: uuidv4(),
      name: "Modara ",
      artist: "Homayoon Shajarian",
      cover:
        "https://dl.joyamusic.ir/Music/1402/01/05/Modara--Homayoon-Shajarian-JoyaMusic.jpg",
      active: false,
      audio:
        "https://dl.joyamusic.ir/Music/1402/01/04/Homayoon%20Shajarian%20-%20Modara.mp3",
    },
    {
      id: uuidv4(),
      name: "Behet Ghol Midam  ",
      artist: "Mohsen Yeganeh",
      cover:
        "https://joyamusic.ir/wp-content/uploads/2020/06/148252035430961526photo_2016-12-23_22-41-10-e1592403240655.jpg",
      active: false,
      audio:
        "https://dl.joyamusic.ir/Album%20Irani/Mohsen%20Yeganeh/128/Behet%20Ghol%20Midam-joyamusic-128.mp3",
    },
  ];
}
