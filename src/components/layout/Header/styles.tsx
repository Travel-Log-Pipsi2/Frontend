import styled from 'styled-components';

const Header = styled.header<{ isHidden: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 48px;
  padding-inline: 16px;
  position: fixed;
  top: ${({ isHidden }) => (isHidden ? '-48px' : 0)};
  left: 0;
  transition: top 400ms ease;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  z-index: 10;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    label {
      order: 2;
    }

    label:first-child {
      margin-left: auto;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.black};
    width: max-content;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export { Header };
