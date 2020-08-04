import React from 'react'

const SearchField = ({searchChange}) => {
    return (
        <div className="text-center">
          <input
            type="text"
            onChange={searchChange}
            name="search"
            placeholder="Search your Robot here"
          />
        </div>
    )
}

export default SearchField
