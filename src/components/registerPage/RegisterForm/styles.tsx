import { StyledInput, StyledPrimaryButton } from 'components/shared';
import styled from 'styled-components';

const Section = styled.section`
  margin-inline: auto;
  margin-top: 72px;

  a {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.typography.size.small};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  margin-inline: auto;
  padding-inline: 24px;
`;

const ErrorMessage = styled.p``;

const Input = styled(StyledInput)<{ isError: boolean }>`
  border: 1px solid
    ${({ theme, isError }) => (isError ? 'red' : theme.colors.black)};
`;

const Button = styled(StyledPrimaryButton)``;

export { Form, Section, Input, Button, ErrorMessage };
