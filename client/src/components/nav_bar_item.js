import React from 'react';
import { Menu } from 'semantic-ui-react';

const NavBarItem = (props) => {
	return (
		<Menu.Item
			name={props.name}
			active={props.name === props.selectedSection}
			onClick={props.onSectionSelect}
		/>
	);
};

export default NavBarItem;

