import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  SearchInputContainer,
  SearchInputWithDropdown,
  LeftSideWrapper,
  RightSideWrapper,
  ButtonDropdown,
} from './styles';

export default function InputSearch() {
  return (
    <SearchInputContainer>
      <SearchInputWithDropdown>
        <LeftSideWrapper>
          <AiOutlineSearch color="#4350ff" size={20} />
          <form action="/search" method="get">
            <input id="search" type="search" placeholder="Search..." />
          </form>
        </LeftSideWrapper>
        <RightSideWrapper>
          <ButtonDropdown>
            <a href="#">
              <strong>Filter By</strong>
            </a>
          </ButtonDropdown>
        </RightSideWrapper>
      </SearchInputWithDropdown>
    </SearchInputContainer>
  );
}
