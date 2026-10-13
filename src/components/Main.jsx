
import MusicCard from "./MusicCard";
import ArtistCard from "./ArtistCard";

function Main() {
  const recentlyPlayed = [
    {
      title: "Tum Hi Ho",
      artist: "Pritam, Mithoon",
      image: "/tum-hi-ho.png",
    },
    {
      title: "Raabta",
      artist: "Shreya Ghoshal",
      image: "/raabta.png",
    },
    {
      title: "Aaya Sher",
      artist: "Anirudh Ravinchander",
      image: "/aaya-sher.png",
    },
    {
      title: "Vaari Jaavan",
      artist: "Shashwat Sachdev,Jyoti N,Jasmine S",
      image: "Vaari-jaavan.png",
    },
    {
      title: "Namo Namo",
      artist: "Amit Trivedi",
      image: "Namo-namo.png",
    },
  ];

  const madeForYou = [
    {
      title: "Ashiqui 2",
      artist: "Mithoon, Arijit Singh, Ankit Tiwari",
      image: "tum-hi-ho.png",
    },
    {
      title: "Sanam Teri Kasam",
      artist: "Himesh Reshammiya, Sameer Anjaan, Subrata Shankar",
      image: "Sanam-teri-kasam.png",
    },
    {
      title: "Finding Her",
      artist: "Kushagra, Bharath, Saaheal",
      image: "Finding-her.png",
    },
    {
      title: "Young G.O.A.T",
      artist: "Cheema Y, Gur Sindhu",
      image: "Young-goat.png",
    },
    {
      title: "Making Memories",
      artist: "Karan Aujla, Ikky",
      image: "Making-memory.png",
    },
  ];

  const artists = [
    {
      name: "Arijit Singh",
      image: "/Arijit-singh.png",
    },
    {
      name: "Pritam",
      image: "/Pritam.png",
    },
    {
      name: "A.R. Rahman",
      image: "/A.R.Rahman.png",
    },
    {
      name: "Anirudh Ravichander",
      image: "/Anirudh-ravichander.png",
    },
    {
      name: "Shreya Ghoshal",
      image: "Shreya-ghosal.png",
    },
  ];

  return (
    <div className=" flex-1 overflow-y-auto rounded-lg bg-neutral-950 p-5 text-white">
      <div className="mb-7 flex gap-3">
        <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">All</button>
        <button className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-semibold hover:bg-neutral-700">Podcasts</button>
        <button className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-semibold hover:bg-neutral-700">Music</button>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Recently Played</h2>
        <div className="grid grid-cols-5">
          {recentlyPlayed.map(function (item) {
            return (
              <MusicCard
                key={item.id}
                title={item.title}
                artist={item.artist}
                image={item.image}
              />
            );
          })}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Made for You</h2>
        <div className="grid grid-cols-5">
          {madeForYou.map(function (item) {
            return (
              <MusicCard
                key={item.id}
                title={item.title}
                artist={item.artist}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="mb-16">
        <h2 className="mb-4 text-2xl font-bold">Popular Artists</h2>
        <div className="grid grid-cols-5">
          {artists.map(function (artist) {
            return (
              <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
