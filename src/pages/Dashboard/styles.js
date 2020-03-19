import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      background: none;
      border: 0;
      margin: 0px 20px;
    }

    strong {
      color: #fff;
      font-size: 24px;
      text-align: center;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  display: flex;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  flex-direction: column;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
