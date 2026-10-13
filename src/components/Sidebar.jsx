
import PlaylistCard from "./PlaylistCard";

function Sidebar(props) {
  return (
    <div className="flex h-full w-[380px] flex-col rounded-lg overflow-hidden bg-neutral-950 p-4 text-white">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-md font-bold">Your Library</h2>
        <button className="flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 hover:bg-neutral-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <span className="text-sm font-bold">Create</span>
        </button>
      </div>
      <div className="mb-4 flex gap-3">
        <button className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-semibold hover:bg-neutral-700">Playlists</button>
        <button className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-semibold hover:bg-neutral-700">Artists</button>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <button aria-label="Search">
          <img src="/search.png" alt="" className="h-6 w-6"/>
        </button>
        <button className="flex items-center gap-2">
          <span className="font-semibold text-gray-400 hover:text-white">Recents</span>
          <img src="/list.png" alt="" className="h-8 w-8"/>
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {props.playlists.map(function (playlist) {
          return (
            <PlaylistCard
              key={playlist.id}
              id={playlist.id}
              title={playlist.title}
              description={playlist.description}
              image={playlist.image}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Sidebar;
