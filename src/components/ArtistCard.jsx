
function ArtistCard(props) {
  return (
    <div className="cursor-pointer rounded-lg p-3 transition hover:bg-neutral-800">
      <img src={props.image} alt={props.name} className="mb-3 aspect-square w-full rounded-full object-cover"/>
      <h3 className="truncate font-semibold">{props.name}</h3>
      <p className="mt-1 text-sm text-gray-400">Artist</p>
    </div>
  );
}

export default ArtistCard;
