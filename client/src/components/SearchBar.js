import React from 'react';

const SearchBar = ({setSearchTerm}) => {
   
    const changeHandler = event => {
        const searchTerm = event.target.value
        setSearchTerm(searchTerm)
      }

    return (
      <div className="search-bar-wrapper">
        <form className="search-form">
          <input
            type="text"
            placeholder="Search for a plant..."
            onChange={changeHandler}
          />
        </form>
      </div>
    );
  };
  
  export default SearchBar;