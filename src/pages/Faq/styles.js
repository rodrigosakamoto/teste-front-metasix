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
export const Infos = styled.table`
  width: 100%;
  color: #fff;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 1em;

  thead {
    background: ${colors.blue};

    td {
      padding: 3px;
      button {
        display: flex;
        align-items: center;
        background: ${colors.blue};
        border: 0;
        margin-right: -40px;
        color: #fff;
        font-weight: bold;

        svg {
          margin: 0 5px;
        }
      }
    }

    th {
      padding: 18px;

      & + th {
        border-left: 1px solid #fff;
        text-align: center;
      }
    }

    th:first-child {
      border-radius: 12px 0 0 12px;
    }
    th:last-child {
      border-radius: 0 12px 12px 0;
    }
  }

  tbody {
    background: #fff;
    color: ${colors.black};
    tr {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      td {
        padding: 12px;
        button {
          background: #fff;
          border: 0;
        }

        span {
          font-weight: bold;
        }

        & + td {
          text-align: center;
        }
      }
    }
  }
`;
