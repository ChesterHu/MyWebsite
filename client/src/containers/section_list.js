import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'semantic-ui-react';

import { selectSection } from '../actions/index';

class SectionList extends Component {
	renderList() {
		return this.props.sections.map(section => {
			return (
				<li 
					key={section.title} 
					onClick={() => this.props.selectSection(section)}>
					{section.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				{this.renderList()}
				The active section is {this.props.activeSection && this.props.activeSection.title}
			</div>
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
