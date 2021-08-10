import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { CardContainer } from './styles';

export default function Card() {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  return (
    <>
      <CardContainer>
        <button type="button" className="btn-like" onClick={handleLike}>
          {like ? (
            <FaHeart size={14} color="#5340ff" />
          ) : (
            <FaRegHeart size={14} color="#5340ff" />
          )}
        </button>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1610980230&ims=326x"
          alt="product-img"
        />
        <p>Tênis Nike Revolution 5 Masculino</p>
        <span>R$ 250,00</span>

        <button type="button" className="btn-add-to-cart">
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </CardContainer>
      <CardContainer>
        <button type="button" className="btn-like" onClick={handleLike}>
          <FaRegHeart size={14} color="#5340ff" />
        </button>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/67/NQQ-4635-C67/NQQ-4635-C67_zoom1.jpg?ts=1610982902&ims=326x"
          alt="product-img"
        />
        <p>Tênis Adidas Coreracer Masculino - Mescla</p>
        <span>R$ 190,00</span>

        <button type="button" className="btn-add-to-cart">
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </CardContainer>
      <CardContainer>
        <button type="button" className="btn-like" onClick={handleLike}>
          {like ? (
            <FaHeart size={14} color="#5340ff" />
          ) : (
            <FaRegHeart size={14} color="#5340ff" />
          )}
        </button>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/66/HZM-5208-066/HZM-5208-066_zoom1.jpg?ts=1620698914&ims=326x"
          alt="car"
        />
        <p>Tênis Nike Downshifter 11 Masculino - Azul+Vermelho</p>
        <span>R$ 199,00</span>

        <button type="button" className="btn-add-to-cart">
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </CardContainer>

      <CardContainer>
        <button type="button" className="btn-like" onClick={handleLike}>
          {like ? (
            <FaHeart size={14} color="#5340ff" />
          ) : (
            <FaRegHeart size={14} color="#5340ff" />
          )}
        </button>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1610980230&ims=326x"
          alt="product-img"
        />
        <p>Tênis Nike Revolution 5 Masculino</p>
        <span>R$ 250,00</span>

        <button type="button" className="btn-add-to-cart">
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </CardContainer>
      <CardContainer>
        <button type="button" className="btn-like" onClick={handleLike}>
          <FaRegHeart size={14} color="#5340ff" />
        </button>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-coreracer-masculino/67/NQQ-4635-C67/NQQ-4635-C67_zoom1.jpg?ts=1610982902&ims=326x"
          alt="product-img"
        />
        <p>Tênis Adidas Coreracer Masculino - Mescla</p>
        <span>R$ 190,00</span>

        <button type="button" className="btn-add-to-cart">
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </CardContainer>
      <CardContainer>
        <button type="button" className="btn-like" onClick={handleLike}>
          {like ? (
            <FaHeart size={14} color="#5340ff" />
          ) : (
            <FaRegHeart size={14} color="#5340ff" />
          )}
        </button>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-11-masculino/66/HZM-5208-066/HZM-5208-066_zoom1.jpg?ts=1620698914&ims=326x"
          alt="car"
        />
        <p>Tênis Nike Downshifter 11 Masculino - Azul+Vermelho</p>
        <span>R$ 199,00</span>

        <button type="button" className="btn-add-to-cart">
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </CardContainer>
    </>
  );
}
