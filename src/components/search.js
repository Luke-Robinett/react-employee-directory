import React, { Component } from "react";

class Search extends Component {
    state = {
        searchText: "",
        searchDropDownIndex: 0
    };

    render() {
        return (
            <div>
                <form>
                    <label for="searchField">Search:</label>
                    <input id="searchField" maxLength="100" value={this.state.searchText} />
                    <label for="searchDropDown">Look In</label>
                    <select id="searchDropDown">
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Search;