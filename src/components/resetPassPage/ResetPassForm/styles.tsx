import { StyledInput, StyledPrimaryButton } from 'components/shared';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 72px;
  margin-inline: auto;

  h1 {
    text-align: center;
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

const Input = styled(StyledInput)<{ isError: boolean }>`
  border: 1px solid
    ${({ theme, isError }) => (isError ? 'red' : theme.colors.black)};
`;

const Button = styled(StyledPrimaryButton)``;

const ErrorMessage = styled.p``;

export { Wrapper, Button, Input, Form, ErrorMessage };
