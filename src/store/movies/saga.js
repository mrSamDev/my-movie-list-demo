import types from "./actionTypes";
import { all, takeLatest, select, call, put, cancel, debounce } from "redux-saga/effects";
import { getIsAllPageLoaded, getPageNumber } from "./selectors";
import movieService from "../../services/movieList";
import { setFetchMovieList, setSearchedKeyword } from "./actions";

const log = console.log;

function* getMovieList() {
	try {
		if (yield select(getIsAllPageLoaded)) return;

		const currentPageNumber = yield select(getPageNumber);
		const newPageNumber = currentPageNumber + 1;
		const { list, totalItems } = yield call(movieService.getMoveList, newPageNumber);
		yield put(setFetchMovieList(list, totalItems, newPageNumber));
	} catch (error) {
		log(error, "[Error,getMovieList]");
	} finally {
		cancel();
	}
}

function* onMovieSearch({ keyword }) {
	try {
		yield put(setSearchedKeyword(keyword));
	} catch (error) {
		log(error, "[Error,onMovieSearch]");
	} finally {
		cancel();
	}
}

export default function* rootSaga() {
	yield all([takeLatest(types.GET_MOVIE_LIST_REQUEST, getMovieList), debounce(1000, types.GET_MOVIE_SEARCH_REQUEST, onMovieSearch)]);
}
