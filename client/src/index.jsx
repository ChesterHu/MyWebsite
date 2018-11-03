import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/title';
import NavBar from './components/nav_bar';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: ['Home', 'About', 'Education', 'Project', 'Teaching', 'Contact']
		};
	}

	render() {
		return (
			<div>
				<NavBar sections={this.state.sections} />
				<Title />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
