import React from 'react';
import { Image } from 'semantic-ui-react';
import { Container, Header, Segment } from 'semantic-ui-react';


const Title = () => {
	return (
		<Segment
			textAlign='center'
			>
			<Container text>
				<Header 
					as='h1'
					content='Hello, World!'
					style={{
						fontSize: '4em',
						fontWeight: 'normal'
					}} />
			</Container>
		</Segment>
	);
}

export default Title;
