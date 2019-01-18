import React, { Component } from 'react';

import Navbar from './navbar';
import Content from './content';

export default () => {
	return (
		<div>
			<Navbar/>
			<Content/>
		</div>
	);
}