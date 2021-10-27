import styled, { css } from 'styled-components';

const mixin = css`
  padding: 12px 28px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.size.p};
  cursor: pointer;
`;

const StyledPrimaryButton = styled.button`
  ${mixin}
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledGhostButton = styled.button`
  ${mixin}
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

export { StyledPrimaryButton, StyledGhostButton };
