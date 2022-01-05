import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.black};
  }
`;

const Places = styled.div`
  display: flex;
  flex-direction: column;

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
    display: none;
    position: absolute;
    right: 0;
    padding: 2px 4px;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.colors.pastelDanger};
    font-size: 0.75rem;
    cursor: pointer;
  }

  &:hover {
    button {
      display: block;
    }
  }
`;

export { Wrapper, Places, Travels, Travel };
