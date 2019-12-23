import React from 'react';
import { Link } from 'react-router-dom';
import { FaTh, FaSignOutAlt } from 'react-icons/fa';
import { Container, HeaderButtons } from './styles';

import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="Prefeitura Boa Vista" />
        </Link>

        <HeaderButtons>
          <li>
            <Link to="/">
              <FaTh size={20} color="#fff" />
              <span>Módulos</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaSignOutAlt size={20} color="#fff" />
              <span>Log Out</span>
            </Link>
          </li>
        </HeaderButtons>
      </div>
    </Container>
  );
}
