import React, {useState} from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';

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
  return (
    <div>
      <Translate />
    </div>
  )
};