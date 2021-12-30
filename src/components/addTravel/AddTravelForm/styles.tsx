import {
  StyledInput,
  StyledPrimaryButton,
  StyledTextarea,
} from 'components/shared';
import styled from 'styled-components';

const Form = styled.form`
  padding-inline: 24px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const Input = styled(StyledInput)<{ isError: boolean }>`
  border: 1px solid
    ${({ theme, isError }) => (isError ? 'red' : theme.colors.black)};

  &:first-child {
    grid-column: 1/3;
  }
`;

const Textarea = styled(StyledTextarea)`
  grid-column: 1 / 3;
`;

const Button = styled(StyledPrimaryButton)`
  grid-column: 1 / 3;
  margin-top: 16px;
`;

const Wrapper = styled.div`
  margin-block: 48px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  h2 {
    text-align: center;
  }
`;

export { Form, Input, Button, Textarea, Wrapper };