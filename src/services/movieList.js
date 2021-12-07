class MovieList {
	constructor() {
		this.getMoveList = this.getMoveList.bind(this);
	}

	getMovieJsonName(pageNumber) {
		return `CONTENTLISTINGPAGE-PAGE${pageNumber}`;
	}

	getMoveList(pageNumber) {
		try {
			const jsonName = this.getMovieJsonName(pageNumber);

			const { page: { "content-items": { content } = {}, "total-content-items": totalContentItems } = {} } = require(`./movieListJson/${jsonName}`);

			return { list: content, totalItems: totalContentItems };
		} catch (error) {
			throw error;
		}
	}
}

export default new MovieList();
