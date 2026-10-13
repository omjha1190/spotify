
function PlaylistCard(props) {
  return (
    <div className="flex cursor-pointer items-center rounded-md py-3 hover:bg-neutral-800">
      <h1 className="flex items-center p-2">{props.id}.</h1>
      <img src={props.image} alt={props.title} className="mr-2 h-12 w-12 rounded-md bg-slate-700 p-0.5 object-cover"/>
      <div>
        <h3 className="text-md font-semibold text-white">{props.title}</h3>
        <p className="text-sm leading-5 tracking-tighter text-gray-400">{props.description}</p>
      </div>
    </div>
  );
}

export default PlaylistCard;
