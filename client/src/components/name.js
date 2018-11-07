import React, { Component } from 'react';
import AnimateOnChange from 'react-animate-on-change';

class Name extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cn_name: 'Chufeng Hu',
			eng_name: 'Chester',
			isEng: false
		}
	}

	handleMouseEnter() {
		this.setState({
			isEng: true
		});	
	}

	handleMouseLeave() {
		this.setState({
			isEng: false
		});
	}

	render() {
		return (
			<AnimateOnChange
				baseClassName='message'
				animationClassName='message-hovered'
				animate={this.state.isEng}
			>
				<div 
					class='name'
					onMouseEnter={() => this.handleMouseEnter()}
					onMouseLeave={() => this.handleMouseLeave()}
				>
					{this.state.isEng ? this.state.eng_name : this.state.cn_name}
				</div>
			</AnimateOnChange>
		);
	}
}

export default Name;
