import React, {Component} from 'react';

class BulletPoint extends Component {
    render() {
        return (
            <li>{ this.props.bulletPoint }</li>
        )
    }
}

export default BulletPoint;