const getStore = (state) => state?.movies || {};

export const getPageNumber = (state) => getStore(state)?.pageNumber || 0;

export const isMovieListLoading = (state) => getStore(state)?.isListLoading;

export const getMovieList = (state) => getStore(state)?.list || [];

export const getIsAllPageLoaded = (state) => getStore(state)?.isAllPageLoaded || false;

export const getSearchKeyWord = (state) => getStore(state)?.searchKeyWord || null;
