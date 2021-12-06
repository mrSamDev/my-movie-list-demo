import { useDispatch } from "react-redux";
import { onMovieSearch } from "../../../store/movies/actions";
import ImgWithCache from "../cacheImage";

const Header = () => {
	const dispatch = useDispatch();

	const onChange = (event) => {
		const value = event?.target?.value;
		dispatch(onMovieSearch(value));
	};

	return (
		// <header className="border-b fixed z-10 bg-black md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
		<header className="sticky top-0 z-50 bg-black md:flex md:items-center md:justify-between p-2 pb-0.5 shadow-lg md:pb-4">
			<div className="flex items-center justify-start mb-1 md:mb-0">
				<ImgWithCache src={"./assets/Back.png"} alt="back" width="25px" height="25px" />
				<p className="leading-none text-1 text-white ml-2">Romantic Comedy</p>
			</div>

			<form className="w-full md:w-1/4">
				<label className="hidden" htmlFor="search-form">
					Search
				</label>
				<input onChange={onChange} className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text" />
			</form>
		</header>
		// </header>
	);
};

export default Header;
