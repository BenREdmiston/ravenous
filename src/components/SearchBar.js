import React from "react";
import Styles from './SearchBar.module.css';

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
        <div className={Styles.SearchBarContainer}>
            <ul className={Styles.SearchSortingOptions}>
                {this.renderSortingOptions()}
            </ul>
            <div className={Styles.SearchInputFields}>
            <input placeholder="Search Businesses" />
            <input placeholder="Location" />
            </div>
            <div className={Styles.SearchButton}>
                <button>Lets Eat!</button>
            </div>
        </div>
    );
}
}

export default SearchBar;

