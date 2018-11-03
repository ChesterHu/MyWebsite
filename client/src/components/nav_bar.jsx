import React, { Component} from 'react';
import { Container, Menu } from 'semantic-ui-react';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: props.sections,
			activeItem: 'Home'
		};
	}

	render() {
		const handleClick = (event, { name }) => { 
			this.setState({ activeItem: name })
		};
		
		const activeItem = this.state.activeItem;
		const sectionItems = this.state.sections.map((sectionItem) => {
			return (
				<Menu.Item
					name={sectionItem} 
					active={activeItem === sectionItem}
					onClick={handleClick}
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
	}
};


export default NavBar;
