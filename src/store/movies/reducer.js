import types from "./actionTypes";

const intialState = {
	list: [],
	isListLoading: true,
	pageNumber: 0,
	totalItems: 0,
	isAllPageLoaded: false,
	searchKeyWord: null,
};

export default function reducer(state = intialState, action) {
	let mergedList = [];
	switch (action.type) {
		case types.SET_MOVIE_LIST:
			mergedList = [...state.list, ...action.list];

			return {
				...state,
				fullList: mergedList,
				list: mergedList,
				totalItems: action.totalItems,
				pageNumber: action.pageNumber,
				isAllPageLoaded: mergedList.length === Number(action.totalItems),
			};

		case types.SET_SEARCH_KEYWORD:
			return {
				...state,
				searchKeyWord: action.keyword,
			};

		default:
			return state;
	}
}
