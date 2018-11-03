import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Segment } from 'semantic-ui-react';

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
			<Grid>
				<Grid.Column width={4}>
					<NavBar sections={this.state.sections} />
				</Grid.Column>
				<Grid.Column stretched width={12}>
					<Segment>
						Welcome to my website
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
