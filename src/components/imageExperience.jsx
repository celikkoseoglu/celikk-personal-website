import React, {Component} from 'react';
import BulletPoint from "./bulletpoint";

class ImageExperience extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <img className="col-md-12" src={this.props.imageLink} alt={this.props.imageAlt}/>
                </div>
                <div className="col-md-8">
                    <h4>{this.props.title}</h4>
                    <h5>{this.props.subtitle}</h5>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default ImageExperience;