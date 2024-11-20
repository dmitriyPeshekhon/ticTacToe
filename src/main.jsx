import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import { AppContainer } from './components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppContainer />
	</React.StrictMode>,
);
