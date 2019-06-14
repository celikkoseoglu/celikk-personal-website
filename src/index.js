import React from 'react';
import ReactDOM from 'react-dom';
import Experience from './components/experience.jsx';
import Skill from './components/skill.jsx';
import Button from 'react-bootstrap/Button';
import './index.sass';
import 'bootstrap/dist/css/bootstrap.css';
import TitleAndText from "./components/titleAndText";

const experiences = require('./data/experiences');
const skills = require('./data/skills');
const content = require('./data/content');

ReactDOM.render(
    <div className="container">

        <div className="row">
            <div className="col-md-2"/>
            <div className="col-md-4">
                <img className="col-md-12 rounded-circle"
                     src="https://avatars3.githubusercontent.com/u/5185809?s=460&v=4"
                     alt="My profile picture from github"/>
            </div>
            <div className="col-md-1"/>
            <div className="col-md-5">
                <h4>Celik Koseoglu</h4>
                <h5>Full Stack Developer</h5>
                <Button href="#" variant="outline-dark" size="lg">CV</Button>
            </div>
        </div>

        <TitleAndText title={ content.heroTitle } text={ content.heroText }/>

        <div>
            <h3 className="text-center">Skills</h3>
            <div className="row">
                <div className="col-md-3">
                    <img className="col-md-12"
                         src="https://celikk.me/images/MacBook-Pro-mockup.png"
                         alt="My profile picture from github"/>
                </div>
                <div className="col-md-9">
                    <h4>PROGRAMMING LANGUAGES</h4>
                    <h5>JAVA, C++, OBJECTIVE-C & MORE...</h5>
                    <p>At the age of 13, I started coding with Microsoft SmallBasic. Then, I walked out of a bookstore
                        with
                        a C# book in my hand. Then, started making Windows Desktop apps. Mobile technologies were
                        rapidly
                        developing at that time so I made some progress with Mobile Technologies. With the little C#
                        knowledge I had, I made QNote and PhotoSec for Windows Phone. Then continued on with other
                        platforms
                        and other technologies. Now I am comfortable to work with several programming languages and
                        frameworks. Make sure to go through my CV for more details!</p>
                </div>
            </div>
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
