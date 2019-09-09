import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const ProjectCard = ({ imageLink, imageAlt, title, subtitle, text }) => {
  const backgroundColor = "rgb(255, 255, 255)";

  const styles = {
    media: {
      padding: "0 10px"
    }
  };

  return (
    <div className="col-md-4">
      <Card raised style={{ backgroundColor }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={imageAlt}
            image={imageLink}
            title={title}
            style={styles.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <Typography gutterBottom variant="h6" component="h2">
              {subtitle}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

ProjectCard.propTypes = {
  imageLink: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string
};

ProjectCard.defaultProps = {
  imageLink: null,
  imageAlt: null,
  title: null,
  subtitle: null,
  text: null
};

export default ProjectCard;
