import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthAPI from 'services/api';
import * as S from './styles';
import { validationSchema } from './schema';

interface IFormInput {
  email: string;
}

const ForgotPassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = ({ email }) => {
    AuthAPI.forgotPassword(email)
      .then(() => {
        console.log('Reset hasła wysłany');
      })
      .catch((err) => console.log(err));
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Zapomniałem hasła</h1>
        <S.Input
          {...register('email')}
          type="email"
          placeholder="Adres e-mail"
          isError={!!errors.email}
        />

        <S.Button type="submit">Wyślij email</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default ForgotPassForm;
