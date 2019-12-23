import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.nav`
  margin: 40px 0;
  ul {
    display: flex;
    margin: 10px;
    li {
      margin-right: 30px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      padding: 13px;
      border-radius: 15px;
      color: ${colors.gray};

      span {
        margin: 0 10px;
      }
    }
  }
`;
