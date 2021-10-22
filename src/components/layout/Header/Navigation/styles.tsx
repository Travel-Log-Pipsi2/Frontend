import styled from 'styled-components';

const Nav = styled.nav<{ isHidden: boolean }>`
  position: fixed;
  bottom: ${({ isHidden }) => (isHidden ? '-56px' : 0)};
  left: 0;
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.black};
  transition: bottom 400ms ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    height: 48px;
    width: max-content;
    bottom: unset;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;

    li {
      width: 48px;
      aspect-ratio: 1;
      border: 1px solid white;

      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 40px;
      }
    }

    a {
      color: white;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export { Nav };
