import React from 'react';
import { Menu } from 'semantic-ui-react';

import Name from './name';
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
			<Menu.Item header> 
				<Name />
			</Menu.Item>
			{sectionItems}
			<Menu.Item> 
				<WelcomeMessage />
			</Menu.Item>
		</Menu>
	);
};


export default NavBar;
