import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px;

  display: flex;
  flex-direction: column;

  h3 {
    color: ${(props) => props.theme.colors.black};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;

      span {
        &:first-child {
          color: ${(props) => props.theme.colors.black};
        }

        &:last-child {
          font-weight: 600;
          color: ${(props) => props.theme.colors.primary[500]};
        }
      }
    }
  }

  > button {
    margin-top: 24px;
    margin-inline: auto;
  }
`;

export { Wrapper };
