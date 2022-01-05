/* eslint-disable indent */
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

  ul {
    display: flex;
    flex-direction: column;
  }
`;

const Li = styled.li<{ highligth: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${(props) =>
    props.highligth
      ? props.theme.colors.primary[500]
      : props.theme.colors.black};

  &:hover {
    background-color: ${(props) => props.theme.colors.grayLight};
  }

  .controls {
    display: flex;
    gap: 8px;

    > button {
      text-transform: uppercase;
      padding: 4px 8px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.75rem;

      &:first-child {
        background-color: ${(props) => props.theme.colors.pastelSuccess[500]};

        &:hover {
          background-color: ${(props) => props.theme.colors.pastelSuccess[700]};
        }
      }

      &:last-child {
        background-color: ${(props) => props.theme.colors.pastelDanger[500]};

        &:hover {
          background-color: ${(props) => props.theme.colors.pastelDanger[700]};
        }
      }
    }
  }
`;

export { Wrapper, Li };
