import React from "react";

const sortingOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
};

class SearchBar extends React.Component {
    renderSortingOptions() {
        return Object.keys(sortingOptions).map(option => (
            <li key={option}>{option}</li>
        ));
    }

render() {
    return (
        <div className='SearchBar'>
            <div className="SearchSortingOptions">
                <ul>{this.renderSortingOptions()}</ul>
            </div>
            <div className="SearchInputFields">
            <input placeholder="Search Businesses" />
            <input placeholder="Location" />
            </div>
            <div className="SearchButton">
                <button>Lets Eat!</button>
            </div>
        </div>
    );
}
}

export default SearchBar;