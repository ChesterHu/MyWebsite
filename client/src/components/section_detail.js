import React from 'react';
import { Segment } from 'semantic-ui-react';

const SectionDetail = ({ section }) => {
	return (
		<Segment>
			this section: { section } has been selected.
		</Segment>
	);
};

export default SectionDetail;

