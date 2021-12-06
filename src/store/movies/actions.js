import types from "./actionTypes";

export const fetchMovieList = () => ({ type: types.GET_MOVIE_LIST_REQUEST });

export const setFetchMovieList = (list, totalItems, pageNumber) => ({ type: types.SET_MOVIE_LIST, list, totalItems, pageNumber });

export const onMovieSearch = (keyword) => ({ type: types.GET_MOVIE_SEARCH_REQUEST, keyword });

export const setSearchedKeyword = (keyword) => ({ type: types.SET_SEARCH_KEYWORD, keyword });
