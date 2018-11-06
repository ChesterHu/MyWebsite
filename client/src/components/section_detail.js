import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import AnimateOnChange from 'react-animate-on-change';

const SectionDetail = ({ section }) => {
	const sample = require(`../data/${section.toLowerCase()}.js`);
	return (
		<AnimateOnChange
			baseClassName='message'
			animationClassName='message-hovered'
			animate={true}
		>
			<Container text>
				<ReactMarkdown source={sample} />
			</Container>
		</AnimateOnChange>
	);
};

export default SectionDetail;

