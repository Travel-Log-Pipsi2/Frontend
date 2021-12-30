import styled from 'styled-components';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div``;

export const StyledInput = styled.input<{ isError: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.size.p};
  font-family: ${({ theme }) => theme.typography.family.main};
  width: 100%;

  ${({ isError }) => isError && 'border-color: red;'}
`;

const ErrorMessage = styled.p`
  color: red;
`;

export const StyledTextarea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.size.p};
  font-family: ${({ theme }) => theme.typography.family.main};
  width: 100%;
  resize: none;
`;

interface FormInputProps {
  name: string;
  error: FieldErrors;
  register: UseFormRegister<FieldValues>;
  [key: string]: unknown;
}

const FormInput = ({
  register,
  name,
  error,
  ...rest
}: FormInputProps): JSX.Element => {
  const { t } = useTranslation('common');
  return (
    <Wrapper className="input-wrapper">
      <StyledInput {...register(name)} isError={!!error} {...rest} />
      {error && <ErrorMessage>{error && t(error.message)}</ErrorMessage>}
    </Wrapper>
  );
};

export default FormInput;
