import React, { useState } from 'react';
import Card from '../../components/Card';
import InputSearch from '../../components/InputSearch';

import api from '../../services/api';

import { Container, ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchProdcut, setSearchProduct] = useState('');

  return (
    <>
      {/* <input type="text" onChange={} value={}/> */}
      <Container>
        <InputSearch />
        <h1>Produtos em destaque</h1>
        <ProductList>
          <Card />
        </ProductList>
      </Container>
    </>
  );
}
