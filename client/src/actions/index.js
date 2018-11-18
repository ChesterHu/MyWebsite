const SELECT_SECTION = 'SELECT_SECTION';
const PLAYER_ROTATE_SHIP = 'PLAYER_ROTATE_SHIP';
const PLAYER_PLACE_SHIP = 'PLAYER_PLACE_SHIP';
const ENEMY_PLACE_ALL_SHIPS = 'ENEMY_PLACE_ALL_SHIPS';

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

function enemyPlaceAllShips() {
	return ({
		type: ENEMY_PLACE_ALL_SHIPS
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
	enemyPlaceAllShips,
	SELECT_SECTION,
	NUM_ROWS,
	NUM_COLS,
	EMPTY,
	SHIP,
	HIT,
	MISS,
	ALL_SHIPS,
	PLAYER_PLACE_SHIP,
	ENEMY_PLACE_ALL_SHIPS,
	PLAYER_ROTATE_SHIP
};
