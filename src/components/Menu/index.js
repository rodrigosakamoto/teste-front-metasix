import React from 'react';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <span>HOME</span>
        </li>
        <li>
          <span>FAQ</span>
        </li>
        <li>
          <span>LOCAIS</span>
        </li>
        <li>
          <span>CATEGORIAS</span>
        </li>
      </ul>
    </Container>
  );
}
