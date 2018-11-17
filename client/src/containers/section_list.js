import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectSection } from '../actions/index.js';

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
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectSection: selectSection }, dispatch);
}

function mapSateToProps(state) {
	return ({
		sections: state.sections
	});
}
