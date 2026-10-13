
function MusicCard(props) {
  return (
    <div className="cursor-pointer rounded-lg p-2 transition hover:bg-neutral-800">
      <img src={props.image} alt={props.title} className="mb-3 aspect-square w-full rounded-lg object-cover"/>
      <h3 className="truncate text-lg font-semibold text-white">{props.title}</h3>
      <p className="truncate text-base text-gray-400">{props.artist}</p>
    </div>
  );
}

export default MusicCard;
