<BlogMetaDecorator folder="reactIcons" image="thumbnail.png" imageAlt="text that says import favicons efficiently without increasing bundle size, and at the bottom, there is the logo of react-icons" description="Introducing React-Icons. A node dependency that allows you to select import icons instead of the whole favicon css." title="CK - Reduce Your React Bundle Size by Importing Only the Required Favicons" />

# Reduce Your React Bundle Size by Importing Only the Required Favicons.

### Introducing React-Icons. A node dependency that allows you to select import icons instead of the whole favicon css.

######January 03, 2020 - 5 min read

Technologies Used: `React`, `Favicon`, `React-Icons`

After a certain point, reducing the size of your react website gets more and more challenging. You find yourself in the micro-optimization territory where each KB starts to matter. This is where 
[React-Icons](https://www.npmjs.com/package/react-icons) comes into play. I was able to decrease my bundle
size about 30KBs without doing any major work at all.

Before React-Icons, we used to import the whole favicon css into our component as below:

<Code language="javascript">
import React from "react";
import "font-awesome/css/font-awesome.min.css";
const FaviconComponent = () => {
  return &lt;p className="fa fa-twitter" />;
};
export default FaviconComponent;</Code>

Instead of doing this, you can specify which icons to import using React-Icons. To install the package dependency,
 run the following command in your terminal:

<Code language="bash">
npm install react-icons --save</Code>

This is how the code looks now. You just import the required icon using an import statement, then use it just like you would use
a regular component.

<Code language="javascript">
import React from "react";
import { FaTwitter } from "react-icons/fa";
const FaviconComponent = () => {
  return &lt;FaTwitter />;
};
export default FaviconComponent;</Code>

If you want to explore which icons are available in the favicon library, you can go and browse node_modules/react-icons/fa/index.js.
You will find a bunch of icons there with their respective names. Or there is a more visual guide available in here: https://fontawesome.com/icons

Moral of the story is:

####Efficiency and speed matter. 

[People sent space probes to Pluto with a PS1 processor](https://www.theverge.com/2015/1/15/7551365/playstation-cpu-powers-new-horizons-pluto-probe). 
You have access to multiples of times faster hardware now. Why would we need to wait more than 5 seconds for a website to load?
