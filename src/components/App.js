import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
    static defaultProps = {};
    
    static propTypes = {};
    
    state = {};
    
    render() {
        return (
            <div className="ui container" style={ { marginTop: "10px" } }>
                <SearchBar />
            </div>
        );
    }
}

export default App;
