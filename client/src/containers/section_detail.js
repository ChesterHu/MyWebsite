import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import { Motion, spring, StaggeredMotion } from 'react-motion';

const toCSS = (scale) => ({ transform: `scale3d(${scale}, ${scale}, ${scale})` })

class SectionDetail extends Component {
	renderSection(section) {
		const defaultStyles = Array(section.subsections.length).fill({ scale: 0 });
		return (
			<div>
				<header>
					<h2>{section.title}</h2>
					{section.subtitle && <p><i>{section.subtitle}</i></p>}
				</header>
				<Divider hidden />
				<StaggeredMotion
					defaultStyles={defaultStyles}
					styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
								return i === 0 ? { scale: spring(1) } : { scale: spring(prevInterpolatedStyles[i - 1].scale) }
					})}>
					{interpolatingStyles =>
						<div>
							{interpolatingStyles.map((style, i) => 
								<div key={i} style={toCSS(style.scale)} >
									{this.renderSubsection(section.subsections[i])}
									{i < section.subsections.length - 1 && <Divider /> }
								</div>
							)}
						</div>
					}
				</StaggeredMotion>
			</div>
		)
	}
	
	renderSubsection(subsection) {
		return (
			<div>
				<h3>{subsection.header && subsection.header}</h3>
				{subsection.paragraphs.map((paragraph) => <p>{paragraph}</p> )}
			</div>
		);
	}

	render() {
		return (
			<Container text key={this.props.section.title}>
				{this.renderSection(this.props.section)}
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
