import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MetaDecorator from "./MetaDecorator";

const BlogMetaDecorator = ({ title, description, image, imageAlt, folder }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    import(`../../data/images/blogPost/${folder}/${image}`).then((imageLink) => {
      setUrl(imageLink.default);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folder, image]);

  return (
    <MetaDecorator imageUrl={url} title={title} description={description} imageAlt={imageAlt} />
  );
};

BlogMetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  folder: PropTypes.string.isRequired,
};

export default BlogMetaDecorator;
