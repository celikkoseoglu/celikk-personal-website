import React from "react";
import PropTypes from "prop-types";
import Section from "../Util/Section";
import Row from "../Util/Row";
import {
  projectsDiv,
  projectsRow,
} from "../../stylesheets/components/Section/Projects.module.sass";
import Heading from "../Heading";
import ProjectCard from "../ProjectCard";

const projects = require("../../data/projects.json");

const Projects = ({ id }) => (
  <Section id={id}>
    <Heading text={projects.projectsTitle} />
    <div className={projectsDiv}>
      <Row className={projectsRow}>
        {projects.projectList.map((project) => (
          <ProjectCard
            imageLink={project.imageLink}
            imageAlt={project.imageAlt}
            title={project.title}
            subtitle={project.subtitle}
            text={project.text}
            blogPost={project.blogPost}
            key={project.title}
          />
        ))}
      </Row>
    </div>
  </Section>
);

Projects.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Projects;
