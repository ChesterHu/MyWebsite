import React from 'react';
import { Container, Menu, Grid, Segment, Header } from 'semantic-ui-react';

import NavBarItem from './nav_bar_item';
import WelcomeMessage from './welcome_message';

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
			fluid
			secondary
			pointing
			widths={6}
		>
			<Menu.Item header> Chester Hu</Menu.Item>
			{sectionItems}
			<Menu.Item> <WelcomeMessage />  </Menu.Item>
		</Menu>
	);
};


export default NavBar;
