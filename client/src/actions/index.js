const SELECT_SECTION = 'SELECT_SECTION';
const PLAYER_PLACE_SHIP = 'PLAYER_PLACE_SHIP';
const PLAYER_ROTATE_SHIP = 'PLAYER_ROTATE_SHIP';

const NUM_ROWS = 10;
const NUM_COLS = 10;
const EMPTY = 'E';
const SHIP = 'S';
const HIT = 'H';
const MISS = 'M';

const ALL_SHIPS = [2, 3, 3, 5];

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

function playerRotateShip(isVertical) {
	return ({
		type: PLAYER_ROTATE_SHIP,
		payload: isVertical
	});
}

export { 
	selectSection,
	playerPlaceShip,
	playerRotateShip,
	SELECT_SECTION,
	NUM_ROWS,
	NUM_COLS,
	EMPTY,
	SHIP,
	HIT,
	MISS,
	ALL_SHIPS,
	PLAYER_PLACE_SHIP,
	PLAYER_ROTATE_SHIP
};
