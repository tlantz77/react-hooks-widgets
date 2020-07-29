import React, {useState} from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';

const items = [
  {
    title: 'Will Graham',
    value: 'Likes dogs'
  },
  {
    title: 'Hannibal Lecter',
    content: 'Likes eating people'
  },
  {
    title: 'Jack Crawford',
    content: 'Likes hats'
  }
];

const options = [
  {
    label: 'Will Graham',
    value: 'Criminal profiler'
  },
  {
    label: 'Hannibal Lecter',
    value: 'Cannibal psychiatrist'
  },
  {
    label: 'Jack Crawford',
    value: 'FBI Director'
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ?
        <Dropdown 
          selected={selected}
          onSelectedChange={setSelected} 
          options={options}
          dropdownLabel={'Select a Character'}
        /> : null
      }
    </div>
  )
};