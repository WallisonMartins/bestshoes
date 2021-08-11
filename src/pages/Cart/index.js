import React from 'react';

import { FaPlus, FaMinus, FaRegTrashAlt } from 'react-icons/fa';

import { Container, ProductOnCart } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductOnCart>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1610980230&ims=326x"
          alt="product-img"
        />
        <div className="product-info">
          <p>Tênis Nike Revolution 5 Masculino</p>
          <span>R$ 250,00</span>

          <div className="btn-amount">
            <button type="button" className="btn-minus">
              <FaMinus size={16} color="#5340ff" />
            </button>
            <p className="amount-product">1</p>
            <button type="button" className="btn-plus">
              <FaPlus size={16} color="#5340ff" />
            </button>
          </div>
        </div>
        <div className="btn-trash">
          <FaRegTrashAlt size={16} color="#5340ff" />
        </div>
      </ProductOnCart>
    </Container>
  );
}
