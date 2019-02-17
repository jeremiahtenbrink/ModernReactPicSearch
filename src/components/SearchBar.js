import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

class SearchBar extends React.Component {
    state = { term: "" };
    
    onFormSubmit = ( event ) => {
        event.preventDefault();
    };
    
    render() {
        return (
            <div className="ui segment">
                <form action="" className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input
                            value={ this.state.term }
                            type="text"
                            onChange={ e => this.setState( { term: e.target.value } ) } />
                        <Button>Go</Button>
                    </div>
                </form>
            </div>
        );
    }
};

SearchBar.propTypes = {};
SearchBar.defaultProps = {};

export default SearchBar;
