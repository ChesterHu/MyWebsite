import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Segment, Image, Divider } from 'semantic-ui-react';

import Title from './components/title';
import InfoCard from './components/info_card';
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
				<NavBar 
					sections={this.state.sections}
					selectedSection={this.state.selectedSection}
					onSectionSelect={(event, { name }) => this.setState({selectedSection: name})}
				/>
				<Grid divided='vertically'>
					<Grid.Column width={12}>
						<SectionDetail section={this.state.selectedSection} />
					</Grid.Column>
					<Grid.Column width={4}>
						<InfoCard />
					</Grid.Column>
				</Grid>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
