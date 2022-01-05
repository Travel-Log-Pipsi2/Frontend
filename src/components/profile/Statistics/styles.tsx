import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
  padding: 12px;
  margin-top: 32px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        &:last-child {
          font-size: 1.25rem;
          font-weight: 600;
          color: ${(props) => props.theme.colors.primary[500]};
        }
      }
    }
  }
`;

export { Wrapper };
