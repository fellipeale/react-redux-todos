import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/style.scss';
import './favicon.ico';

render(
    <App />,
    document.getElementById('app')
);
