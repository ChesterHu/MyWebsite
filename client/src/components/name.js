import React, { Component } from 'react';
import AnimateOnChange from 'react-animate-on-change';

class Name extends Component {
	constructor(props) {
		super(props);

		this.state = {
			display_name: 'Chufeng Hu',
			eng_name: 'Chester',
			cn_name: 'Chufeng Hu',
			diff: false
		}
	}

	handleMouseEnter() {
		this.setState({
			display_name: this.state.eng_name,
			diff: true
		});	
	}

	handleMouseLeave() {
		this.setState({
			display_name: this.state.cn_name,
		});
	}

	render() {
		return (
			<AnimateOnChange
				baseClassName='message'
				animationClassName='message-hovered'
				onAnimationEnd={() => this.setState({diff: false})}
				animate={this.state.diff}
			>
				<div 
					class='name'
					onMouseEnter={() => this.handleMouseEnter()}
					onMouseLeave={() => this.handleMouseLeave()}
				>
					{this.state.display_name}
				</div>
			</AnimateOnChange>
		);
	}
}

export default Name;
