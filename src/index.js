import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Experience from './components/experience.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const experiences = require('./data/experiences');

ReactDOM.render(
    <div>
        <App/>

        {experiences.map(experience => <Experience companyName={experience.companyName}
                                                   description={experience.description}
                                                   bulletPoints={experience.bulletPoints}
        />)}

    </div>,
    document.getElementById('root')
);
