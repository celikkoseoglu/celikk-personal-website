import React from 'react';
import ReactDOM from 'react-dom';
import Experience from './components/experience.jsx'
import Skill from './components/skill.jsx'
import './index.sass';
import 'bootstrap/dist/css/bootstrap.css'

const experiences = require('./data/experiences');
const skills = require('./data/skills');

ReactDOM.render(
    <div className="container">
        <div className="row">

            <div className="col-md-4">
                {skills.map(skill => <Skill header={skill.header} content={skill.content}/>)}
            </div>

            <div className="col-md-8">
                {experiences.map(experience => <Experience companyName={experience.companyName}
                                                           description={experience.description}
                                                           bulletPoints={experience.bulletPoints}
                />)}
            </div>

        </div>
    </div>,
    document.getElementById('root')
);
