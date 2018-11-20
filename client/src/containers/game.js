import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider } from 'semantic-ui-react';

import Square from '../components/square';
import { 
	playerPlaceShip, 
	playerRotateShip, 
	enemyPlaceAllShips,
	ALL_SHIPS
} from '../actions/index';

class Game extends Component {

	renderBoard(board) {
		return board.map((row, rowIndex) => {
			return (
				<div className='board-row'>
					{row.map((value, colIndex) => 
						<Square 
							value={value}
							onClick={() => this.props.playerPlaceShip(rowIndex, colIndex)}/>)}
				</div>
			);
		});
	}

	showNextShipToPlace() {
		let length = this.props.playerBoard.ships.length;
		if (length == ALL_SHIPS.length) {
			return <div>Good! You placed all ships.</div>
		}
		return <div>Place next ship with {ALL_SHIPS[length]} length</div>
	}

	render() {
		return (
			<div>
				<button onClick={() => this.props.playerRotateShip(false)}>Horizontal</button>
				<button onClick={() => this.props.playerRotateShip(true)}>Vertical</button>
				<button onClick={() => this.props.enemyPlaceAllShips()}>Start</button>
			 {this.showNextShipToPlace()}
				<div>
					{this.renderBoard(this.props.playerBoard.board)}
					<Divider />
					{this.renderBoard(this.props.enemyBoard.board)}
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
	return bindActionCreators({ playerPlaceShip, playerRotateShip, enemyPlaceAllShips }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
