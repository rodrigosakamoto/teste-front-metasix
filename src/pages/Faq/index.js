import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Container, SearchBar } from './styles';

import Menu from '../../components/Menu';

export default function Faq() {
  return (
    <Container>
      <Menu />
      <SearchBar>
        <h1>FAQ - Perguntas Frequentes</h1>
        <form>
          <input type="text" placeholder="Busque por termo..." />
          <button type="button">
            <FaSearch size={20} color="#fff" />
            <span>BUSCAR</span>
          </button>
        </form>
      </SearchBar>
    </Container>
  );
}
