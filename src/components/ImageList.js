import "./imageList.scss";
import React from "react";
import PropTypes from "prop-types";

const ImageList = ( props ) => {
    const images = props.images.map( ( { description, id, urls } ) => {
        return <img key={ id } src={ urls.regular } alt={ description } />;
    } );
    
    return (
        <div className="image-list">
            { images }
        </div>
    );
};

ImageList.propTypes = {};
ImageList.defaultProps = {};

export default ImageList;
