import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Tabular extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeItem: 'bio'
		};
	};

	
	render() {
		const activeItem = this.state.activeItem;

		const handleClick = (event, { name }) => {
			console.log(name);
			this.setState({activeItem: name});
		}

		return (
			<Menu tabular>
        <Menu.Item name='bio' active={activeItem === 'bio'} onClick={handleClick} />
        <Menu.Item name='photos' active={activeItem === 'photos'} onClick={handleClick} />
      </Menu>
		);
	}
}

export default Tabular;
