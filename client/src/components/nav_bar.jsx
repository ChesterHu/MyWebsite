import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

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
			fluid
			vertical
			pointing
		>
			<Container>
				{sectionItems}
			</Container>
		</Menu>
	);
};


export default NavBar;
