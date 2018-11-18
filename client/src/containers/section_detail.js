import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SectionDetail extends Component {
	renderSection(section) {
		const numSubsections = section.subsections.length;
		const subsections = section.subsections.map((subsection, i)=>{
			return (
				<div>
					<h3>{subsection.header && subsection.header}</h3>
					{subsection.paragraphs.map((paragraph) => <p>{paragraph}</p> )}
					{i < numSubsections - 1 && <Divider />}
				</div>
			);
		});

		return (
			<div key={section.title}>
				<header>
					<h2>{section.title}</h2>
					{section.subtitle && <p><i>{section.subtitle}</i></p>}
				</header>
				<Divider hidden />
				{subsections}
			</div>
		);
	}


	render() {
		return (
			<Container text>
				<ReactCSSTransitionGroup
					transitionName='section'
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={0.1}>
					{this.renderSection(this.props.section)}
				</ReactCSSTransitionGroup>
			</Container>
		);
	}
}


function mapStateToProps(state) {
	return ({
		section: state.activeSection
	});
}

export default connect(mapStateToProps)(SectionDetail);
