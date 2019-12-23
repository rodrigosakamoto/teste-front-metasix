import React, { useState, useEffect } from 'react';
import { FaSearch, FaEdit, FaTrash, FaPlusCircle } from 'react-icons/fa';
import { Container, SearchBar, Infos } from './styles';

import colors from '../../styles/colors';
import api from '../../services/api';
import Menu from '../../components/Menu';

export default function Faq() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function loadInfo() {
      const response = await api.get('');

      setInfos(response.data.results, (response.data.results.length = 4));
    }
    loadInfo();
  }, []);

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

      <Infos>
        <thead>
          <tr>
            <th>Pergunta</th>

            <td>
              <button type="button">
                <FaPlusCircle size={24} color="#fff" />
                Nova Pergunta
              </button>
            </td>
            <th />
            <th>
              <span>Ordem</span>
            </th>
            <th>
              <span>Editar</span>
            </th>
            <th>
              <span>Excluir</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {infos.map(info => (
            <tr key={info.objectId}>
              <td>{info.question}</td>
              <td />
              <td />
              <td>
                <span>{infos.indexOf(info) + 1}</span>
              </td>
              <td>
                <button type="button">
                  <FaEdit size={24} color={colors.blue} />
                </button>
              </td>
              <td>
                <button type="button">
                  <FaTrash size={24} color={colors.red} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Infos>
    </Container>
  );
}
