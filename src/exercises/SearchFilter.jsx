import React, { useState } from 'react';

const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];

function SearchFilter() {
  const [listItem, setListItem] = useState(items)

  function filterSearch(e) {
    const inputValue = e.target.value
    const filteredItems = items.filter((word) => word.toLocaleLowerCase().substring(0, inputValue.length).includes(inputValue.toLowerCase()))
    setListItem(filteredItems)
  }

  return (
    <div>
      <input type="text" onChange={filterSearch} />
      <ul>
        {listItem.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default SearchFilter;
