import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

import Sample from '../data/Home';

const SectionDetail = ({ section }) => {
	const sample = require(`../data/${section}.js`);
	return (
		<Container text>
			<ReactMarkdown source={sample} />
		</Container>
	);
};

export default SectionDetail;

