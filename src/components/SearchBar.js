import React from 'react';



function SearchBar(props) {

        return (
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    value={ props.value }
                    onChange={ props.onChange }
                    onKeyPress={ props.onKeyPress }
                />
            </div>
        )
   
}

export default SearchBar;