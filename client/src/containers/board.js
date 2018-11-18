import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Board extends Component {
	render() {
		return (
			<div>
				Board
			</div>
		);
	}
}

function mapStateToProps(state) {
	return ({
		playerBoard: state.playerBoard
	});
}

export default Board;
