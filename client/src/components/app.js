import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react';

import InfoCard from './info_card';
import Footer from './footer';
import SectionList from '../containers/section_list';
import SectionDetail from '../containers/section_detail';
import Game from '../containers/game';

export default class App extends Component {
	render() {
		return (
			<div>
				<SectionList />
				<Divider hidden />
				<Grid divided='vertically' style={{minHeight:750}}>
					<Grid.Column width={10}>
						<SectionDetail />
					</Grid.Column>
					<Grid.Column width={6}>
						<InfoCard />
					</Grid.Column>
				</Grid>
				<Footer />
			</div>
		);
	}
}
