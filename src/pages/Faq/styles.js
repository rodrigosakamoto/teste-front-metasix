import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const SearchBar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  flex-wrap: wrap;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  form {
    display: flex;
    align-items: center;

    input {
      border-radius: 12px;
      padding: 10px;
      border: 1px solid #eee;
      max-width: 400px;
    }

    button {
      background: ${colors.blue};
      color: #fff;
      border: 0;
      border-radius: 12px;
      width: 120px;
      padding: 10px;
      margin: 10px;

      display: flex;
      align-items: center;
      justify-content: space-around;
      font-weight: bold;
    }
  }
`;
