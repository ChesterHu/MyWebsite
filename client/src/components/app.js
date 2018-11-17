import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Title from './title';
import InfoCard from './info_card';
import NavBar from './nav_bar';
import Footer from './footer';
import SectionDetail from './section_detail';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: ['Home', 'Projects', 'Teaching', 'Contact'],
			selectedSection: 'Home'
		};

		this.handleClick = this.handleClick.bind(this); // better to bind it in constructor
	}
	
	handleClick(e, { name }) {
		this.setState({selectedSection: name});
	}

	render() {
		return (
			<div>
				<NavBar 
					sections={this.state.sections}
					selectedSection={this.state.selectedSection}
					onSectionSelect={this.handleClick}
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
