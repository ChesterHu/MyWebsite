import React from 'react';
import { Container, Menu, Grid, Segment, Header } from 'semantic-ui-react';

import NavBarItem from './nav_bar_item';

const NavBar = (props) => {
	const sectionItems = props.sections.map((section) => {
		return (
			<NavBarItem
				name={section}
				selectedSection={props.selectedSection}
				onSectionSelect={props.onSectionSelect}
			/>
		);
	});

	return (
		<Menu 
			secondary
			pointing
		>
			<Container>
				<Menu.Item header> Chester Hu</Menu.Item>
				{sectionItems}
				<Menu.Item position='right'> Greetings </Menu.Item>
			</Container>
		</Menu>
	);
};


export default NavBar;
