import React from 'react';
import ReactRouter from 'react-router';
import { render } from 'react-dom';

import routes from './config/routes';

render(
	routes,
	document.getElementById("app")
);