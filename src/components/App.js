import React, { Component } from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { Player } from "video-react";
import ModalExampleDimmer from "./Modal";

class App extends Component {
    state = {
        images: []
    };
    
    static defaultProps = {};
    
    static propTypes = {};
    
    onSearchSubmit = ( term ) => {
        console.log( term );
        unsplash.get( "/search/photos", {
            params: {
                query: term
            },
            
        } ).then( res => {
            this.setState( { images: res.data.results } );
        } );
    };
    
    render() {
        return (
            <div className="ui container" style={ { marginTop: "10px" } }>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList images={ this.state.images } />
                
                <ModalExampleDimmer />
            </div>
        );
    }
}

export default App;
