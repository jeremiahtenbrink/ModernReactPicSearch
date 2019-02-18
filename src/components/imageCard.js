import React, { Component } from "react";

class imageCard extends Component {
    static defaultProps = {};
    
    static propTypes = {};
    
    state = {};
    
    render() {
        return (
            <div>
                <img src={this.props.image.urls.regular} alt={this.props.image.description} />
            </div>
        );
    }
}

export default imageCard;
