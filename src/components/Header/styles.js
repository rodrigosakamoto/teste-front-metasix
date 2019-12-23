import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.header`
  background: ${colors.blue};
  padding: 20px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
  }

  img {
    width: 180px;
  }
`;

export const HeaderButtons = styled.ul`
  display: flex;
  li {
    margin-left: 30px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 16px;
        font-weight: bold;
        color: #ffff;
        margin-top: 6px;
      }
    }
  }
`;
