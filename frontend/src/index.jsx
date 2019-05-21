import React from 'react';
import ReactDOM from 'react-dom';


// Styles
import './scss/style.scss';

// Components
import App from './components/App';


document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App />,
        document.getElementById('content')
    );
});
