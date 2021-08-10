import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 5px 20px 0 rgb(11 7 110 / 4%);
  height: 70px;
  justify-content: space-between;
  left: 0;
  padding: 10px 24px;
  position: relative;
  top: 0;
  transition: all 0.45s ease;
  width: 100%;
  z-index: 100;

  > a {
    width: 150px;
    color: #5340ff;
    font-weight: bold;
    font-size: 15px;
  }
`;

export const NavBarMain = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  width: 100%;
  padding-left: 48px;

  .icon-profile {
    background: #f3f4ff;
    border-radius: 50%;
    padding: 10px 11px;
    cursor: pointer;

    svg {
      font-weight: bold;
      color: #5340ff;
    }
  }
`;

export const NavBarMenu = styled.ul`
  display: flex;
  align-items: center;
  position: relative;

  li {
    margin-right: 32px;

    a {
      color: #090b17;
      font-size: 16px;
      font-weight: normal;

      &:hover {
        color: #5340ff;
      }
    }
  }
`;

export const NavBarLogged = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 32px;
  }

  & li:nth-child(3) {
    padding-right: 32px;
    border-right: 1px solid #eee;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: absolute;

  &:after {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    right: 0;
    top: 0;
    background: #ff892e;
    border-radius: 50%;
  }

  > span {
    position: relative;
  }
`;
