import React from 'react';
import Card from '../../components/Card';

import { Container, ProductList } from './styles';

export default function Home() {
  return (
    <>
      <Container>
        <h1>Produtos em destaque</h1>
        <ProductList>
          <Card />
        </ProductList>
      </Container>
    </>
  );
}
