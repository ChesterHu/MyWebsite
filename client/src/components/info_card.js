import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const InfoCard = () => {
	const extra = (
		<Icon.Group>
			<a href='https://www.linkedin.com/in/chufeng-hu-545022114/'>
				<Icon name='linkedin' size='large' />
			</a>
			<a href='https://github.com/ChesterHu' >
				<Icon name='github' size='large' />
			</a>
		</Icon.Group>
	)
	return (
		<Card
			image={require('../images/test_background.jpg')}
			header='Chester Hu'
			meta='University of Waterloo'
			description="I'm graduate student in computer scince, I love math and coding."
			extra={extra}
			centered
			size='small'
		/>
	);
}

export default InfoCard;
