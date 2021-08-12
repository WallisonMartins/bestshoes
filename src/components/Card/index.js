import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import api from '../../services/api';

import { CardContainer } from './styles';

export default function Card() {
  const [products, setProducts] = useState([]);
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/products');

      const { data } = response;

      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <CardContainer key={product.id}>
          <button type="button" className="btn-like" onClick={handleLike}>
            {like ? (
              <FaHeart size={14} color="#5340ff" />
            ) : (
              <FaRegHeart size={14} color="#5340ff" />
            )}
          </button>
          <img src={product.image} alt={product.title} />
          <p>{product.title}</p>
          <span>R$ 250,00</span>

          <button type="button" className="btn-add-to-cart">
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </CardContainer>
      ))}
    </>
  );
}
