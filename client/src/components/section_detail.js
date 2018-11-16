import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';

import { home, projects, teaching, contact } from '../data/contents';

const SectionDetail = ({ section }) => {
	const selectedSection = getContent(section);
	return (
		<Container text>
			{renderSection(selectedSection)}
		</Container>
	);
};

function getContent(section) {
	switch(section) {
		case 'Home': return home;
		case 'Contact': return contact;
		case 'Projects': return projects;
		case 'Teaching': return teaching;
	}
	return null;
}

function renderSection(section) {
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
		<div>
			<header>
				<h2>{section.title}</h2>
				{section.subtitle && <p><i>{section.subtitle}</i></p>}
			</header>
			<Divider hidden />
			{subsections}
		</div>
	);
}

export default SectionDetail;

