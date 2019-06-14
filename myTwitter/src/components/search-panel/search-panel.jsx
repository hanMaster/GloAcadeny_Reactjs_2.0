import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const SearchPanel = () => {
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
      <Input
        className="search-input"
        type="text"
        placeholder="Поиск по записям"
      />
    </InputGroup>
  );
};

export default SearchPanel;
