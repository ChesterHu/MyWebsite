import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Square from '../components/square';
import { playerPlaceShip, playerRotateShip } from '../actions/index';

class Game extends Component {

	renderBoard(board) {
		return board.map((row, rowIndex) => {
			return (
				<div className='board-row'>
					{row.map((value, colIndex) => 
						<Square 
							value={value}
							onClick={() => this.props.playerPlaceShip(rowIndex, colIndex, 3, true)}/>)}
				</div>
			);
		});
	}


	render() {
		return (
			<div>
				<button onClick={() => this.props.playerRotateShip(false)}>Horizontal</button>
				<button onClick={() => this.props.playerRotateShip(true)}>Vertical</button>
				{this.renderBoard(this.props.playerBoard.board)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return ({
		playerBoard: state.playerBoard
	});
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ playerPlaceShip, playerRotateShip }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
