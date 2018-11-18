
const SELECT_SECTION = 'SELECT_SECTION';

const NUM_ROWS = 10;
const NUM_COLS = 10;
const EMPTY = 'E';
const SHIP = 'S';
const HIT = 'H';
const MISS = 'M';

const ALL_SHIPS = [2, 3, 3, 5];
const PLAYER_PLACE_SHIP = 'PLAYER_PLACE_SHIP';

function selectSection(section) {
	return ({
		type: SELECT_SECTION,
		payload: section
	});
}

function playerPlaceShip(i, j, shipLength, isVertical) {
	return ({
		type: PLAYER_PLACE_SHIP,
		payload: { i, j, shipLength, isVertical }
	});
}

export { 
	selectSection,
	playerPlaceShip,
	SELECT_SECTION,
	NUM_ROWS,
	NUM_COLS,
	EMPTY,
	SHIP,
	HIT,
	MISS,
	ALL_SHIPS,
	PLAYER_PLACE_SHIP
};
