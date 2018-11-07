import React from 'react';
import { Container } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

import Home from '../data/home';
import Contact from '../data/contact';
import Projects from '../data/projects';
import Teaching from '../data/teaching';

const SectionDetail = ({ section }) => {
	const content = getContent(section);
	return (
		<Container text>
			<ReactMarkdown source={content} />
		</Container>
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

