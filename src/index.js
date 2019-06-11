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
                <img className="col-md-12" src="https://avatars3.githubusercontent.com/u/5185809?s=460&v=4"
                     alt="My profile picture from github"/>
            </div>
            <div className="col-md-4">
                <h4>Celik Koseoglu</h4>
                <h5>Full Stack Developer</h5>
            </div>
        </div>

        <div className="col-md-4">
            <h3>Why a Developer?</h3>
            <p>Computers have always fascinated me. I was always on the curious side and wanted to learn how they
                operated. One day I went to the bookstore and walked out with a programming language book. Now I am
                studying computer science and doing internships in cool companies.</p>
        </div>

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
