import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.size.p};
  font-family: ${({ theme }) => theme.typography.family.main};
  width: 100%;
`;

export { StyledInput };
