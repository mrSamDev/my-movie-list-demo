import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList } from "../../store/movies/actions";
import { getMovieList, getSearchKeyWord, isMovieListLoading } from "../../store/movies/selectors";
import useInterSectionHook from "../../hooks/useInterSectionHook";
import MovieLoader from "../../components/home/loader";
import MovieCard from "../../components/home/movieCard";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMovieList());
	}, [dispatch]);
	const isLoading = useSelector(isMovieListLoading);
	const movieList = useSelector(getMovieList);
	const searchKeyWord = useSelector(getSearchKeyWord);

	const callback = () => {
		dispatch(fetchMovieList());
	};

	const [observeElementRef] = useInterSectionHook(callback);

	if (isLoading && !movieList.length) return <MovieLoader />;

	const getDisplayList = () => {
		if (Boolean(searchKeyWord)) {
			return movieList.filter((movie) => {
				return movie.name.toLowerCase().includes(searchKeyWord.toLowerCase());
			});
		}

		return movieList || [];
	};

	return (
		<Fragment>
			<div className="grid grid-cols-3 gap-y-2 gap-x-3 sm:grid-cols-3 overflow-auto p-2">
				{getDisplayList().map(function (movie, index) {
					const isMovieTheLastItemInTheList = index === movieList.length - 1;
					return (
						<div key={index + "_" + movie.name} ref={isMovieTheLastItemInTheList ? observeElementRef : null}>
							<MovieCard {...{ movie, index }} />
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};

export default Home;
