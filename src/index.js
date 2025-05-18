<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import Provider from './context'
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider>
			<App />
		</Provider>
	</React.StrictMode>
)
=======

import './index.css';
import App from "./components/app/app.js";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
>>>>>>> 51bf0b7319da9a52cf0c48ed10b8ad35edeb3bc1
