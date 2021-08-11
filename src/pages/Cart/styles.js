import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 0;
`;

export const ProductOnCart = styled.div`
  display: flex;
  position: relative;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  transition: transform 0.2s;
  box-shadow: 0px 2px 24px 0px rgb(11 7 110 / 9%);

  img {
    align-self: center;
    max-width: 180px;
  }

  div.product-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-left: 1px solid #eee;
    margin-left: 25px;
    padding-left: 25px;

    p {
      font-size: 22px;
      padding: 10px 0;
      font-weight: bold;
      letter-spacing: 0.15rem;
    }
    span {
      display: block;
      font-size: 18px;
      letter-spacing: 0.15rem;
    }
  }

  .btn-amount {
    display: flex;
    align-items: center;
    height: 100px;
    width: 80px;
    justify-content: space-between;

    p.amount-product {
      font-size: 18px;
      font-weight: normal;
      padding: 20px;
    }

    button {
      background: transparent;
      border: 0;
      border-radius: 50%;
      padding: 8px 9px;
      border: 1px solid #5340ff;
    }
  }

  .btn-trash {
    display: flex;
    right: 3%;
    position: absolute;
    cursor: pointer;

    justify-content: center;
    align-items: center;
    background: #fee;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;
