import React from 'react';
import { Image } from 'semantic-ui-react';
import { Container, Header, Segment } from 'semantic-ui-react';


const Title = () => {
	return (
		<Segment
			inverted
			color='teal'
			textAlign='center'
			style={{ minHeight: 700, padding: '1em 0em' }}
			vertical>
			<Container text>
				<Header 
					as='h1'
					content='Chester Hu'
					inverted
					style={{
						fontSize: '4em',
						fontWeight: 'normal',
						marginBottom: 0,
						marginTop: '3em'
					}} />
			</Container>
		</Segment>
	);
}

export default Title;
