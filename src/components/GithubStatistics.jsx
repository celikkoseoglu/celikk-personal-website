import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoStar, GoRepoForked } from "react-icons/go";
import { numbers, main, innerMain } from "../stylesheets/components/GithubStatistics.module.sass";

const GithubStatistics = ({ username, repo, className }) => {
  const [githubStats, setGithubStats] = useState({
    stargazers_count: "-",
    forks_count: "-",
  });

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then((response) => response.json())
      .then((json) => {
        setGithubStats({
          stargazers_count: json.stargazers_count,
          forks_count: json.forks_count,
        });
      })
      // eslint-disable-next-line no-console
      .catch((e) => console.log(`Error while calling GitHub API: ${e}`));
  }, [username, repo]);

  return (
    <div className={`${className} ${main}`}>
      <div className={innerMain}>
        <GoStar />
        <p className={numbers}>{githubStats.stargazers_count}</p>
        <GoRepoForked />
        <p className={numbers}>{githubStats.forks_count}</p>
      </div>
    </div>
  );
};

GithubStatistics.propTypes = {
  username: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  className: PropTypes.string,
};

GithubStatistics.defaultProps = {
  className: null,
};

export default GithubStatistics;
