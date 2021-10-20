import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
  padding: 12px 28px;
  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.size.p};
  cursor: pointer;
`;

export { StyledPrimaryButton };
