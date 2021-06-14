import React from "react";
import PropTypes from "prop-types";
import Section from "../Util/Section";
import { noMarginBottom } from "../../stylesheets/components/Section/Skills.module.sass";
import Heading from "../Heading";
import SkillCard from "../SkillCard";

const personalSkills = require("../../data/personalSkills.json");

const Skills = ({ id }) => (
  <Section id={id}>
    <Heading className={noMarginBottom} text={personalSkills.skillsTitle} />
    {personalSkills.skillList.map((personalSkill) => (
      <SkillCard
        imageLink={personalSkill.imageLink}
        imageAlt={personalSkill.imageAlt}
        text={personalSkill.text}
        key={personalSkill.imageAlt}
      />
    ))}
  </Section>
);

Skills.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Skills;
