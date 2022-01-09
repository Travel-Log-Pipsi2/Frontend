import styled from 'styled-components';

const Nav = styled.nav<{ isHidden: boolean }>`
  position: fixed;
  bottom: ${({ isHidden }) => (isHidden ? '-56px' : 0)};
  left: 0;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: bottom 400ms ease;
  border: 1px solid red;

  box-shadow: ${(props) => !props.isHidden && '0 -8px 16px rgba(0, 0, 0, 0.3)'};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    height: 48px;
    width: max-content;
    bottom: unset;
    box-shadow: none;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 440px;
    }

    li {
      width: 52px;
      height: 60px;
      aspect-ratio: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: max-content;
        height: 100%;
      }
    }

    a {
      color: ${({ theme }) => theme.colors.white};
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: row;
      }

      > svg {
        width: 32px;
        height: 32px;
        aspect-ratio: 1;
        fill: ${(props) => props.theme.colors.black};

        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          display: none;
        }
      }

      span {
        font-size: 11px;
        display: none;

        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          display: block;
          font-size: 16px;
          color: ${(props) => props.theme.colors.black};

          &:hover {
            color: ${(props) => props.theme.colors.primary[500]};
          }
        }
      }

      &.active {
        span {
          display: block;
          color: ${(props) => props.theme.colors.black};

          @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            color: ${(props) => props.theme.colors.primary[500]};
            font-weight: 700;
          }
        }

        > svg {
          fill: ${(props) => props.theme.colors.primary[500]};
        }
      }
    }
  }
`;

export { Nav };
