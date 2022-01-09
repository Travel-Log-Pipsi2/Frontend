import styled, { css } from 'styled-components';

const mixin = css`
  padding: 12px 28px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.size.p};
  font-weight: 700;
  cursor: pointer;
`;

const smallMixin = css`
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 400;
  cursor: pointer;
`;

const StyledPrimaryButton = styled.button<{ small?: boolean }>`
  ${(props) => (props.small ? smallMixin : mixin)}
  background-color: ${({ theme }) => theme.colors.primary[500]};
  border-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.white};

  transition: all 350ms ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary[700]};
    background-color: ${(props) => props.theme.colors.primary[700]};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const StyledGhostButton = styled.button<{ small?: boolean }>`
  ${(props) => (props.small ? smallMixin : mixin)}

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  transition: all 350ms ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary[500]};
    color: ${(props) => props.theme.colors.primary[500]};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export { StyledPrimaryButton, StyledGhostButton };
