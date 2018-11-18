
const SELECT_SECTION = 'SELECT_SECTION';

const ROW_NUM = 10;
const COL_NUM = 10;
const EMPTY = 'E';
const SHIP = 'S';
const HIT = 'H';
const MISS = 'M';

function selectSection(section) {
	return ({
		type: SELECT_SECTION,
		payload: section
	});
}

export { 
	selectSection, 
	SELECT_SECTION,
	ROW_NUM,
	COL_NUM,
	EMPTY,
	SHIP,
	HIT,
	MISS
};
