import { 
	NUM_ROWS, 
	NUM_COLS,
	EMPTY,
	SHIP,
	HIT,
	MISS,
	ALL_SHIPS,
	PLAYER_PLACE_SHIP
} from '../actions/index';

function initState() {
	return {
		board: Array(NUM_ROWS).fill().map(() => Array(NUM_COLS).fill(EMPTY)),
		ships: [],
		shipIsVertical: true
	}
}

function PlayerBoardReducer(state = initState(), action) {
	if (action.type === PLAYER_PLACE_SHIP) {
		if (state.ships.length >= ALL_SHIPS.length) return state;
		let shipLength = ALL_SHIPS[state.ships.length];
		let nextState = JSON.parse(JSON.stringify(state));
		let { i, j } = action.payload;
		
		if (placeShip(i, j, shipLength, nextState.shipIsVertical, nextState.board)) nextState.ships.push(shipLength);
		return nextState;
	}
	return state;
}

function placeShip(i, j, shipLength, isVertical, board) {
	let dx = isVertical;
	let dy = !isVertical;

	let x = i; 
	let y = j;
	for (let k = 0; k < shipLength; ++k) {
		if (!isValid(x, y) || board[x][y] != EMPTY) return false;
		x += dx;
		y += dy;
	}

	x = i; y = j;
	for (let k = 0; k < shipLength; ++k) {
		board[x][y] = SHIP;
		x += dx;
		y += dy;
	}
	return true;
}

function isValid(i, j) {
	return i >= 0 && j >= 0 && i < NUM_ROWS && j < NUM_COLS;
}

export { PlayerBoardReducer };
