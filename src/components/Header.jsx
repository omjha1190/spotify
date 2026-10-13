const Header = () => {
  return (
    <div className="flex items-center gap-7 px-5 py-2.5 bg-black w-full">
        <button>
            <img src="logo.png" alt="" className="w-9 h-9 text-white"/>
        </button>
        <div className="flex gap-3 ml-72">
            <button className="p-3 rounded-full bg-neutral-900">
                <img src="home.png" alt="" className="w-7 h-7" />
            </button>
            <div className="flex items-center w-[470px] h-12 rounded-full bg-neutral-800 px-4 hover:bg-neutral-800 focus-within:outline focus-within:outline-2 focus-within:outline-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
                <input type="text" placeholder="What do you want to play?" className="flex-1 bg-transparent border-none outline-none px-4 text-base text-white placeholder:text-neutral-400"/>
                <div className="h-8 w-px bg-[#535353] mx-4 shrink-0" />
                <button type="button" aria-label="Browse library" className="shrink-0 text-neutral-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7h16l1 13H3L4 7Z" />
                        <path d="M6 4h12" />
                        <path d="M9 11h6" />
                        <path d="M8 16h8" />
                    </svg>
                </button>
            </div>
        </div>
        <div className="flex ml-auto">
            <div className="flex items-center gap-5">
                <button className="px-3 py-1 rounded-full bg-white hover:scale-105 hover:bg-stone-200">
                    <h1 className="text-md font-bold tracking-tighter">Explore Premium</h1>
                </button>
                <button className="flex items-center gap-1 hover:scale-105">
                    <img src="install.png" alt="" className="w-5 h-5"/>
                    <h3 className="text-gray-500 font-bold text-md hover:text-white">Install App</h3>
                </button>
                <div className="flex items-center gap-6 ml-7">
                    <img src="bell.png" alt="" className="h-8 w-8 hover:scale-110 cursor-pointer"/>
                    <img src="person.png" alt="" className="h-8 w-8 hover:scale-110 cursor-pointer"/>
                    <div className="flex items-center px-3 py-1 rounded-full bg-orange-500 hover:scale-105 cursor-pointer">
                        <h1 className="text-lg font-bold ">O</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header