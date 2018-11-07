import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import AnimateOnChange from 'react-animate-on-change';

import Home from '../data/home';
import Contact from '../data/contact';
import Projects from '../data/projects';
import Teaching from '../data/Teaching';

const SectionDetail = ({ section }) => {
	const content = getContent(section);
	return (
		<AnimateOnChange
			baseClassName='message'
			animationClassName='message-hovered'
			animate={true}
		>
			<Container text>
				<ReactMarkdown source={content} />
			</Container>
		</AnimateOnChange>
	);
};

function getContent(section) {
	switch(section) {
		case 'Home': return Home;
		case 'Contact': return Contact;
		case 'Projects': return Projects;
		case 'Teaching': return Teaching;
	}
	return null;
}

export default SectionDetail;

