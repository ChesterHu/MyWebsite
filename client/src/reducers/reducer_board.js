import { 
	ROW_NUM, 
	COL_NUM,
	EMPTY,
	SHIP,
	HIT,
	MISS
} from '../actions/index';

const initBoard = (rows, cols) => Array(rows).fill().map(() => Array(cols).fill(EMPTY));

function PlayerBoardReducer(state = initBoard, action) {
	return state;
}

export { PlayerBoardReducer };
