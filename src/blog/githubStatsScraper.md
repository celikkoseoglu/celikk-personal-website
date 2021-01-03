<BlogMetaDecorator folder="githubStatsScraper" image="githubStatsScraper.jpg" imageAlt="An image showing GitHub star and fork icons. It says 20 next to stars, 3 next to forks" description="Pull github statistics from a particular repo and display them on your website" title="CK - GitHub Stats Scraper" />

# GitHub Stats Scraper - showcase repositories on your website

### Your personal website is the perfect place to showcase your projects. Why don't you display some GitHub stats on there?

###### Nov 27, 2020 - 10 min read

Some people prefer to showcase their GitHub repo statistics next to projects on their personal websites. This blog post will show you how you can get statistics from GitHub for a particular repository and display it on your website.

<MediaCarousel folder="githubStatsScraper" images="stats.png"/>

#### 1) Understand the GitHub API

Pulling statistics for a specific repo is surprisingly easy. This is the URL format you're looking for: https://api.github.com/repos/${username}/${repo}. Replace `${username}` with your github username and `${repo}` with the name of a repository.

Here is an example: https://api.github.com/repos/celikkoseoglu/celikk-personal-website. If you go to that link, you'll see that the response contains fields such as `stargazers_count` and `forks_count`. First one tells you how many stars that the repo has, and the other one tells you have many times the repo has been forked.

#### 2) Create a React Component

Up next, we're going to create a very simple react component that just displays how many stars and forks our repo got. You can pretty much copy and paste this onto your project to see it in action.

<Code language="javascript">
import React, { useEffect, useState } from "react";
&nbsp;
const GithubStatistics = () => {
  const [githubStats, setGithubStats] = useState({
    stargazers_count: "-",
    forks_count: "-",
  });
&nbsp;
  useEffect(() => {
    fetch(\`https\://api.github.com/repos/celikkoseoglu/celikk-personal-website\`)
      .then((response) => response.json())
      .then((json) => {
        setGithubStats({
          stargazers\_count\: json.stargazers_count,
          forks\_count\: json.forks_count,
        });
      })
      .catch((e) => console.log(\`Error while calling GitHub API: ${e}\`));
  }, []);
  &nbsp;
  return (
    \<div>
      \<p>{githubStats.stargazers_count}</p>
      \<p>{githubStats.forks_count}</p>
    \</div>
  );
};
&nbsp;
export default GithubStatistics;</Code>

The component code begins with a state decleration. We start with "`-`" as the number of stars and forks we got. As soon as the component mounts, the useEffect() hook will run and it will do a call to the specific GitHub repo in the fetch call. Then the response will be used to populate our state. When the state changes, the component will redraw and it will start showing the info we wanted to see! In case anything goes wrong, `console.log()` statement will log an error message on the console.

#### 3) Get the icons

We managed to get the numbers but now we need to focus on the visual part. We can get icons for GitHub's stars and forks by using [react-icons](/blog/reactIcons). No need to download svg or png files! Add this to your `package.json`:

<Code language="javascript">
"dependencies": {
    .
    .
    "react-icons": "3.11.0",
    .
}</Code>

Now you're ready to insert them into your component. Notice how I've added `<GoStar />` and `<GoRepoForked />`. 

<Code language="javascript">
import React, { useEffect, useState } from "react";
import { GoStar, GoRepoForked } from "react-icons/go";
&nbsp;
const GithubStatistics = () => {
  const [githubStats, setGithubStats] = useState({
    stargazers_count: "-",
    forks_count: "-",
  });
  &nbsp;
  useEffect(() => {
    fetch(\`https\://api.github.com/repos/celikkoseoglu/celikk-personal-website\`)
      .then((response) => response.json())
      .then((json) => {
        setGithubStats({
          stargazers\_count\: json.stargazers_count,
          forks\_count\: json.forks_count,
        });
      })
      .catch((e) => console.log(\`Error while calling GitHub API\: ${e}\`));
  }, []);
  &nbsp;
  return (
    \<div>
      \<GoStar />
      \<p>{githubStats.stargazers_count}</p>
      \<GoRepoForked />
      \<p>{githubStats.forks_count}</p>
    \</div>
  );
};
&nbsp;
export default GithubStatistics;</Code>


With those added, we can see some icons next to the numbers but it definitely needs more styling to look good.

#### 4) Final touches

It's a good practise to keep components reusable. Notice how it now requires you to give it a `username` and a `repo` string. You can pretty much copy and paste this version into your own project and treat it as a black box now.

<Code language="javascript">
import React, { useEffect, useState } from "react";
import { GoStar, GoRepoForked } from "react-icons/go";
import { numbers, main, innerMain } from "../stylesheets/components/GithubStatistics.module.sass";
&nbsp;
const GithubStatistics = ({ username, repo, className }) => {
  const [githubStats, setGithubStats] = useState({
    stargazers_count: "-",
    forks_count: "-",
  });
&nbsp;
  useEffect(() => {
    fetch(\`https\://api.github.com/repos/${username}/${repo}\`)
      .then((response) => response.json())
      .then((json) => {
        setGithubStats({
          stargazers\_count\: json.stargazers_count,
          forks\_count\: json.forks_count,
        });
      })
      .catch((e) => console.log(\`Error while calling GitHub API: ${e}\`));
  }, [username, repo]);
&nbsp;
  return (
    \<div className={\`${className} ${main}\`}>
      \<div className={innerMain}>
        \<GoStar />
        \<p className={numbers}>{githubStats.stargazers\_count}</p>
        \<GoRepoForked />
        \<p className={numbers}>{githubStats.forks\_count}</p>
      \</div>
    \</div>
  );
};
&nbsp;
export default GithubStatistics;</Code>

Let's add some styling to make it look like the image you saw when you clicked on this blog post.

<Code language="sass">
.numbers
  margin: 0 5px 0 3px
  font-size: 15px
&nbsp;
.main
  display: inline-block
&nbsp;
.innerMain
  display: flex
  align-items: center
  justify-content: center</Code>

And now it is ready. If you found this useful, give a star [here](https://github.com/celikkoseoglu/celikk-personal-website).

#### Now go and showcase your GitHub repos on your website

There is a limit to how many times you can call this API per minute. If you're getting that many clicks on your website, consider caching the response from GitHub in your own backend. This is a very simple solution that calls GitHub APIs using the client. It's not the best practise but it solves the problem for a small website.
