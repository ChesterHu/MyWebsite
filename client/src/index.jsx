import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Segment, Image } from 'semantic-ui-react';

import Title from './components/title';
import NavBar from './components/nav_bar';
import SectionDetail from './components/section_detail';
import Footer from './components/footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: ['Home', 'Education', 'Project', 'Teaching', 'Contact'],
			selectedSection: 'Home'
		};
	}

	render() {
		return (
			<div>
				<Segment>
					<Image src={require('./images/test_background.jpg')} circular size='small'/>
				</Segment>
				<Grid>
					<Grid.Column width={4}>
						<NavBar 
							sections={this.state.sections}
							selectedSection={this.state.selectedSection}
							onSectionSelect={(event, { name }) => this.setState({selectedSection: name})}
						/>
					</Grid.Column>
					<Grid.Column stretched width={12}>
						<SectionDetail section={this.state.selectedSection} />
					</Grid.Column>
				</Grid>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
