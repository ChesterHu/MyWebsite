import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'semantic-ui-react';

import { selectSection } from '../actions/index';

class SectionList extends Component {
	renderList() {
		return this.props.sections.map(section => {
			return (
				<Menu.Item 
					name={section.name}
					active={this.props.activeSection.name === section.name}
					onClick={() => this.props.selectSection(section)}>
				</Menu.Item>
			);
		});
	}

	render() {
		return (
			<Menu 
				fluid
				secondary
				pointing>
				{this.renderList()}
			</Menu>
		);
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectSection: selectSection }, dispatch);
}

function mapStateToProps(state) {
	return ({
		sections: state.sections,
		activeSection: state.activeSection
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionList);
