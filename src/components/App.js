import React, { useState } from 'react';
import Route from './Route';
import Header from './Header';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';

const items = [
  {
    title: 'Will Graham',
    content: 'Likes dogs'
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
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected} 
          options={options} 
          dropdownLabel='Select a Character'
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )
};