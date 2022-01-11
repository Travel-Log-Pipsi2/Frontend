import styled from 'styled-components';

const Wrapper = styled.div`
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px;
  margin-top: 32px;

  h3 {
    font-size: 1.25rem;
    padding-inline: 8px;
    color: ${(props) => props.theme.colors.black};
  }

  > form {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;

    > .input-wrapper {
      width: 100%;
    }

    > button {
      margin-left: auto;
    }
  }
`;

export { Wrapper };
