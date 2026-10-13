
function MusicPlayer() {
  return (
    <div className="fixed bottom-0 left-0 z-50 h-[90px] w-full grid grid-cols-3 items-center border-t border-neutral-800 bg-black px-5 text-white">
      <div className="flex min-w-0 items-center gap-3">
        <img src="/tum-hi-ho.png" alt="Song cover" className="h-14 w-14 rounded object-cover"/>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold">Tum Hi Ho</h3>
          <p className="truncate text-xs text-gray-400">Arijit Singh</p>
        </div>
        <button className="ml-2 text-gray-400 hover:text-white" aria-label="Add to favourites">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-5">
          <button className="text-gray-400 hover:text-white" aria-label="Shuffle">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M4 4l5 5M14 14l7 7" />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-white" aria-label="Previous song">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M6 5h2v14H6zM19 5v14L8 12z" />
            </svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:scale-105" aria-label="Play">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-white" aria-label="Next song">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M16 5h2v14h-2zM5 5v14l11-7z" />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white" aria-label="Repeat">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3" />
            </svg>
          </button>
        </div>
        <div className="flex w-[480px] items-center gap-2 text-[10px] text-gray-400">
          <span>3:48</span>
          <div className="h-1 flex-1 cursor-pointer rounded-full bg-[#555]">
            <div className="h-1 w-full rounded-full bg-white" />
          </div>
          <span>3:48</span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 text-gray-400">
        <button className="hover:text-white" aria-label="Queue">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 5h16M4 10h16M4 15h10M4 20h10" />
          </svg>
        </button>
        <button className="hover:text-white" aria-label="Connect to device">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="4" width="12" height="16" rx="2" />
            <rect x="17" y="7" width="4" height="10" rx="1" />
            <circle cx="9" cy="16" r="1" />
          </svg>
        </button>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 9v6h4l5 4V5L8 9z" />
          <path d="M16 9a5 5 0 0 1 0 6M18 5a9 9 0 0 1 0 14" />
        </svg>
        <div className="h-1 w-24 rounded-full bg-[#555]">
          <div className="h-1 w-full rounded-full bg-white" />
        </div>
        <button className="hover:text-white" aria-label="Fullscreen">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;
