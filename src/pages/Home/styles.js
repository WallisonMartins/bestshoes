import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 0;

  h1 {
    font-size: 22px;
    color: #676e8b;
    padding-bottom: 10px;
    position: relative;
    margin-bottom: 30px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      background: #eee;
    }
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;
