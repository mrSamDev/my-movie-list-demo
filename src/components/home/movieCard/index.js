const imageUrl = (x) => `/assets/${x}`;

const MovieCard = ({ movie, index }) => {
	return (
		<div key={movie.name + index} className="group relative">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 mt-5">
				<img
					src={imageUrl(movie["poster-image"])}
					onError={(e) => {
						e.target.onerror = null;
						e.target.src = imageUrl("placeholder_for_missing_posters.png");
					}}
					alt={imageUrl(movie["poster-image"])}
					className=" object-center object-cover lg:w-full lg:h-full"
					width="100"
					height="100"
				/>
			</div>
			<div className="flex justify-between truncate">
				<div>
					<p className="text-sm text-gray-500 mt-0.5">{movie.name}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
//w-full h-full
