import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

const toCSS = (rotateX) => ({ transform: `rotateX(${rotateX}deg)` });

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
			<div key={this.state.isEng}>
				<Motion 
					defaultStyle={{ rotateX: 220 }}
					style={{ rotateX: spring(0)}}>
					{style =>
						<div 
							className='name'
							style={toCSS(style.rotateX)}
							onMouseEnter={() => this.handleMouseEnter()}
							onMouseLeave={() => this.handleMouseLeave()}
						>
							{this.state.isEng ? this.state.eng_name : this.state.cn_name}
						</div>
					}
				</Motion>
			</div>
		);
	}
}

export default Name;
