import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/Main';
import PromptContainer from '../containers/PromptContainer';

const routes = (
	<Router history={ hashHistory }>
		<Route path='/' component={ Main }>
			<IndexRoute component={ PromptContainer } />
		</Route>
	</Router>
);

export default routes;