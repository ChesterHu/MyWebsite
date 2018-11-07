import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Image } from 'semantic-ui-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Title from './components/title';
import InfoCard from './components/info_card';
import NavBar from './components/nav_bar';
import Footer from './components/footer';
import SectionDetail from './components/section_detail';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: ['Home', 'Projects', 'Teaching', 'Contact'],
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
				<Grid divided='vertically' style={{minHeight:750}}>
					<Grid.Column width={10}>
						<ReactCSSTransitionGroup
							transitionName='flip'
							transitionEnterTimeout={1000}
							transitionLeaveTimeout={1}>
							<div key={this.state.selectedSection}>
								<SectionDetail section={this.state.selectedSection} />
							</div>
						</ReactCSSTransitionGroup>
					</Grid.Column>
					<Grid.Column width={6}>
						<div class='w3-animate-right'>
							<InfoCard />
						</div>
					</Grid.Column>
				</Grid>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
