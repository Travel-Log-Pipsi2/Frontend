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

  > ul {
    padding-inline: 8px;

    li {
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;

        > span {
          color: ${(props) => props.theme.colors.primary[500]};
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: 600;
          margin-block: 4px;

          transition: color 350ms ease;

          &:hover {
            color: ${(props) => props.theme.colors.primary[700]};
          }
        }

        button {
          right: 0;
          padding: 2px 4px;
          text-transform: uppercase;
          background-color: ${(props) => props.theme.colors.pastelDanger[500]};
          font-size: 0.75rem;
          cursor: pointer;
          border-radius: 4px;
          font-weight: 600;
          color: ${(props) => props.theme.colors.white};

          &:hover {
            background-color: ${(props) =>
              props.theme.colors.pastelDanger[700]};
          }
        }
      }
    }
  }
`;

export { Wrapper };
