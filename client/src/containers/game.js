import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, Button } from 'semantic-ui-react';

import Square from '../components/square';
import { ALL_SHIPS, NUM_ROWS, NUM_COLS, VERTICAL, HORIZONTAL } from '../config/game_params';

import { 
	playerPlaceShip, 
	playerRotateShip, 
	playerHit,
	enemyHit,
	enemyPlaceAllShips,
} from '../actions/index';

class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gameStart: false,
			enemy: {
				hitCandidates: [...Array(NUM_ROWS * NUM_COLS).keys()].map(idx => [Math.floor(idx / NUM_ROWS), idx % NUM_ROWS]),
			}
		}
	}

	renderBoard(board, isPlayerBoard = true) {
		return board.map((row, rowIndex) => {
			return (
				<div className="board-row">
					{row.map((value, colIndex) => 
						<Square 
							value={value}
							onClick={this.handleClick(rowIndex, colIndex, isPlayerBoard)}/>)}
				</div>
			);
		});
	}

	showNextShipToPlace() {
		let length = this.props.playerBoard.ships.length;
		if (length == ALL_SHIPS.length) {
			return (
				<div>
					Good! You placed all ships.
					<button onClick={() => this.start()} >Start</button>
				</div>
			);
		}
		return <div>Place next ship with {ALL_SHIPS[length]} length</div>
	}
	
	handleClick(i, j, isPlayerBoard) {
		let length = this.props.playerBoard.ships.length;
		let { playerPlaceShip, playerHit, enemyHit } = this.props;

		if (isPlayerBoard) {
			return (() => playerPlaceShip(i, j));
		}
		return (() => {
			playerHit(i, j);
			this.enemyHitEasy();
		});
	}

	enemyHitEasy() {
		const { hitCandidates } = this.state.enemy;
		const len = hitCandidates.length;
		if (len == 0) return;
		const r = Math.floor(Math.random() * len);
		this.props.enemyHit(hitCandidates[r][0], hitCandidates[r][1]);
		hitCandidates[r] = hitCandidates[len - 1];
		hitCandidates.pop();
	}

	start() {
		this.setState({gameStart: true});
		this.props.enemyPlaceAllShips();
	}

	render() {
		const playerHealth = this.props.playerBoard.health;
		const enemyHealth = this.props.enemyBoard.health;
		console.log(playerHealth, enemyHealth);
		return (
			<div className="game">
				{this.state.gameStart && (playerHealth === 0 || enemyHealth === 0) && 
				<div>
					<h2>Winner is {enemyHealth === 0 ? "Player" : "Enemy"}</h2>	
				</div>
				}
				{!this.state.gameStart && 
					<div>
						<div onChange={(e) => this.props.playerRotateShip(e.target.value === VERTICAL)}>
							<label for="shipDirVer">Vertical</label>
							<input type="radio" id="shipDirVer" name="shipDir" value={VERTICAL} defaultChecked />
							<label for="shipDirHor">Horizontal</label>
							<input type="radio" id="shipDirHor" name="shipDir" value={HORIZONTAL} />
						</div>
						<br />
						{this.showNextShipToPlace()}
					</div>
				}
				<div>
					<div key='playerBoard'>
						<h4>Your Board</h4>
						{this.renderBoard(this.props.playerBoard.board)}
					</div>
					{this.state.gameStart &&
						<div key='enemyBoard'>
							<Divider />
							<h4>Enemy Board</h4>
							{this.renderBoard(this.props.enemyBoard.board, false)}
						</div>
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { playerBoard, enemyBoard } = state;
	return ({
		playerBoard, enemyBoard
	});
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		playerPlaceShip, 
		playerRotateShip, 
		enemyPlaceAllShips, 
		playerHit,
		enemyHit,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
