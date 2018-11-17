import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import reducer from './reducers/index';
import SectionList from './containers/section_list';

const store = createStore(() => {});

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
