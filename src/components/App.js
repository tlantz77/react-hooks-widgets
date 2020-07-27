import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

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

export default () => {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  )
};