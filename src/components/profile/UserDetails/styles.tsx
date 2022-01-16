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

  > span {
    width: max-content;
    margin-inline: auto;
    margin: 16px auto 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 2px;

      @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }

      span {
        &:first-child {
          color: ${(props) => props.theme.colors.black};
        }

        &:last-child {
          font-weight: 600;
          color: ${(props) => props.theme.colors.primary[500]};
          font-size: 0.75rem;

          @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
            font-size: 0.875rem;
          }
        }
      }
    }
  }

  > button {
    margin-top: 24px;
    margin-inline: auto;
  }

  .my-facebook-button-class {
    padding: 8px 12px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.primary[500]};
    font-size: 1rem;
    cursor: pointer;
    margin-inline: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    transition: all 350ms ease;

    &:hover {
      border-color: ${(props) => props.theme.colors.primary[700]};
      background-color: ${(props) => props.theme.colors.primary[700]};
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export { Wrapper };
