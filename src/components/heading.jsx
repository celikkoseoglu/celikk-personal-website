import React, {Component} from 'react';

class Heading extends Component {
    render() {
        return (
            <h3 className="text-center">{ this.props.text }</h3>
        )
    }
}

export default Heading;