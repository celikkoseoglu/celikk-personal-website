import React, {Component} from 'react';

class BulletPoint extends Component {
    render() {
        return (
            <p>{ this.props.bulletPoint }</p>
        )
    }
}

export default BulletPoint;