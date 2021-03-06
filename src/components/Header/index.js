import React from 'react';

import {
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import {
  NavBarContainer,
  NavBarMain,
  NavBarMenu,
  NavBarLogged,
  Badge,
} from './styles';

export default function Header() {
  return (
    <NavBarContainer>
      <Link to="/">BEST-SHOES</Link>
      <NavBarMain>
        <NavBarMenu>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link>Add</Link>
          </li> */}
        </NavBarMenu>
        <NavBarLogged>
          <li>
            <AiOutlineSearch size={22} />
          </li>
          <li>
            <FaRegHeart size={18} />
          </li>
          <li>
            <Link to="/cart">
              <AiOutlineShopping size={22} />
              <Badge />
            </Link>
          </li>
          <div className="icon-profile">
            <AiOutlineUser size={22} />
          </div>
        </NavBarLogged>
      </NavBarMain>
    </NavBarContainer>
  );
}
