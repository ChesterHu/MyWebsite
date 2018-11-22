import * as actionType from './action_types';

const NUM_ROWS = 10;
const NUM_COLS = 10;
const EMPTY = 'E';
const SHIP = 'S';
const HIT = 'H';
const MISS = 'M';

const ALL_SHIPS = [2, 3, 3, 5];

function selectSection(section) {
	return ({
		type: actionType.SELECT_SECTION,
		payload: section
	});
}

function enemyPlaceAllShips() {
	return ({
		type: actionType.ENEMY_PLACE_ALL_SHIPS
	});
}

function playerPlaceShip(i, j) {
	return ({
		type: actionType.PLAYER_PLACE_SHIP,
		payload: { i, j }
	});
}

function playerRotateShip(isVertical) {
	return ({
		type: actionType.PLAYER_ROTATE_SHIP,
		payload: isVertical
	});
}

function playerHit(i, j) {
	return ({
		type: actionType.PLAYER_HIT,
		payload: { i, j }
	});
}

function enemyHit(i, j) {
	return ({
		type: actionType.ENEMY_HIT,
		payload: { i, j }
	})
}

export { 
	selectSection,
	playerPlaceShip,
	playerRotateShip,
	playerHit,
	enemyHit,
	enemyPlaceAllShips,
	NUM_ROWS,
	NUM_COLS,
	EMPTY,
	SHIP,
	HIT,
	MISS,
	ALL_SHIPS,
};
