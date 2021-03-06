import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }

  > p {
    color: ${(props) => props.theme.colors.black};
    font-size: 1.25rem;
  }
`;

const Places = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  padding: 12px;

  > h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary[500]};
  }

  > h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.black};
  }
`;

const Travels = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Travel = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  span {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.primary[300]};
  }

  p {
    color: ${(props) => props.theme.colors.black};
    font-size: 1rem;
    font-weight: 100;
  }

  button {
    position: absolute;
    right: 0;
    padding: 2px 4px;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.colors.pastelDanger[500]};
    font-size: 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;

    &:hover {
      background-color: ${(props) => props.theme.colors.pastelDanger[700]};
    }
  }

  &:hover {
    button {
    }
  }
`;

export { Wrapper, Places, Travels, Travel };
