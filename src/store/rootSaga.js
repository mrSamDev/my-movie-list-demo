import { all } from "redux-saga/effects";
import movieSaga from "./movies/saga";

export default function* rootSaga() {
	yield all([movieSaga()]);
}
