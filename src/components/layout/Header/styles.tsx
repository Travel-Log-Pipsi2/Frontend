import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 48px;
  padding-inline: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    width: max-content;
  }
`;

export { Header };
