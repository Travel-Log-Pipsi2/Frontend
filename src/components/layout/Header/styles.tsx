import styled from 'styled-components';

const Header = styled.header<{ isHidden: boolean }>`
  background-color: ${({ theme }) => theme.colors.black};
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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    label {
      order: 2;
    }

    label:first-child {
      margin-left: auto;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    width: max-content;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export { Header };
