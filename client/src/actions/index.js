const SELECT_SECTION = 'SELECT_SECTION';

function selectSection(section) {
	console.log('section selected: ', section.title);
	return ({
		type: SELECT_SECTION,
		payload: section
	});
}
