
import Header from "./components/Header";
import Main from "./components/Main";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";

const App = () => {
  const playlists = [
    {
      id: 1,
      title: "Night Vibes",
      description: "Playlist • Your collection",
      image: "night-vibes.png",
    },
    {
      id: 2,
      title: "Sad Songs",
      description: "Playlist • Your collection",
      image: "sad.png",
    },
    {
      id: 3,
      title: "Peaceful & Soulful",
      description: "Playlist • Your collection",
      image: "peacful.png",
    },
    {
      id: 4,
      title: "Motivation & Life",
      description: "Playlist • Your collection",
      image: "Motivation.png",
    },
    {
      id: 5,
      title: "Old Is Gold",
      description: "Playlist • Your collection",
      image: "OldIsGold.png",
    },
    {
      id: 6,
      title: "Travel & Long Drive",
      description: "Playlist • Your collection",
      image: "Travel&LongDrive.png",
    },
  ];

  return (
    <div className="min-h-fit bg-black">
      <Header />

      <div className="mx-2 flex h-[820px] gap-2">
        <Sidebar playlists={playlists} />
        <Main />
      </div>
      <MusicPlayer/>
    </div>
  );
};

export default App;
