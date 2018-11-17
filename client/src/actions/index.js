const SELECT_SECTION = 'SELECT_SECTION';

function selectSection(section) {
	return ({
		type: SELECT_SECTION,
		payload: section
	});
}

export { selectSection, SELECT_SECTION };
