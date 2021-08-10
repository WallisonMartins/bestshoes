import styled from 'styled-components';
import { darken } from 'polished';


export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 3%;
  padding: 20px;
  transition: transform .2s; /* Animation */
  box-shadow: 1px 2px 10px 1px rgb(11 7 110 / 9%);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px 0 rgb(11 7 110 / 12%);
  }


  > button.btn-like {
    width: 30px;
    height: 30px;
    background: none;
    border: 1px solid #5340ff;
    border-radius: 15%; 
    
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
  }

  img {
    align-self: center;
    max-width: 250px;
  }

  > p {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button.btn-add-to-cart {
    color: #fff;
    /* background: #5340ff; */
    background: none;
    border: none;
    border: 1px solid #5340ff;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition: .65s;

    &:hover {
      /* background: ${darken(0.3, '#5340ff')}; */
      background: #5340ff;
      span {
        color: #fff;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      color: #fff;
      color: #5340ff;
      padding: 10px;
      transition: .65s;
    }

    /* &:hover {
      background: #5340ff;
      span {
        color: #fff !important;
      }
    } */
  }
`;