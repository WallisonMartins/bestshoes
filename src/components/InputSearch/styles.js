import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  max-width: 628px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  padding-bottom: 60px;
`;

export const SearchInputWithDropdown = styled.div`
  background: #fff;
  box-shadow: 1px 2px 10px 1px rgb(11 7 110 / 9%);
  border-radius: 8px;
  height: 64px;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  padding: 10px 0;
`;

export const LeftSideWrapper = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 28px;

  form {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    input {
      font-size: 16px;
      background: #fff;
      padding: 0;
      height: 100%;
      padding-left: 60px;
      padding-right: 24px;
      background: transparent;
      border: none;
      width: 100%;
    }
  }
`;

export const RightSideWrapper = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 2px solid #eee;
`;

export const ButtonDropdown = styled.span`
  position: static;
  min-width: 84px;

  margin-right: 28px;
  padding-left: 28px;

  a {
    strong {
      font-size: 16px;
      color: #333;
    }
  }
`;
