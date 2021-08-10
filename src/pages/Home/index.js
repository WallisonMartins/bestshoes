import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import { Container, ProductList } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Produtos em destaque</h1>
        <ProductList>
          <Card />
        </ProductList>
      </Container >
      <Footer />
    </>
  )
}

