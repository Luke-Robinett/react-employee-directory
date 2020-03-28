import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div>
                <label for="search-field">Search: </label>
                <input
                    name="searchString"
                    id="search-field"
                    placeholder="last, first"
                    value={props.searchString}
                    onChange={props.handleInputChange}
                />
                <button onClick={props.handleFormSubmit}>
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;