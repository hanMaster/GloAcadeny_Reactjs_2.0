import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const SearchPanel = ({ searchString, onSearchChange }) => {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
      <Input type="text" placeholder="Поиск по записям" value={searchString} onChange={onSearchChange} />
    </InputGroup>
  );
};

export default SearchPanel;
