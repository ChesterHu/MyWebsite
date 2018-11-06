import React, { Component } from 'react';

class WelcomeMessage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			messages: [
				'Hello, World!', 
				'Welcome to my website'
			],
			current_msg: '',
			current_msg_idx: 0,
			current_char_idx: 0
		};
	}

	componentDidMount() {
		this.timer = setInterval(
			() => this.tick(), 
			150
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick() {
		let msg = this.state.current_msg;
		let msg_idx = this.state.current_msg_idx;
		let char_idx = this.state.current_char_idx;

		char_idx += 1;
		msg = this.state.messages[msg_idx].substring(0, char_idx);
		if (char_idx == this.state.messages[msg_idx].length) {
			char_idx = -1;
			msg_idx += 1;
		}

		if (msg_idx == this.state.messages.length) {
			clearInterval(this.timer);
			this.setState({current_msg: ''});
		} else {
			this.setState({
				current_msg: msg,
				current_msg_idx: msg_idx,
				current_char_idx: char_idx
			});
		}
	}

	render() {
		return (
			<div>{this.state.current_msg}</div>	
		);
	}

}

export default WelcomeMessage;
