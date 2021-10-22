import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';
import useAuth from 'utils/hooks/useAuth';
import AuthAPI from 'services/api';
import * as S from './styles';
import { validationSchema } from './schema';

interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const { isAuthenticated, signUpCtx } = useAuth();

  const onSubmit: SubmitHandler<IFormInput> = ({
    username,
    email,
    password,
    confirmPassword,
  }) => {
    AuthAPI.register(username, email, password, confirmPassword)
      .then(() => signUpCtx())
      .catch((err) => console.log(err));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Rejestracja</h1>

        <S.Input
          {...register('username')}
          type="text"
          placeholder="Nazwa użytkownika"
          isError={!!errors.username}
        />
        <S.Input
          {...register('email')}
          type="email"
          placeholder="Adres e-mail"
          isError={!!errors.email}
        />
        <S.Input
          {...register('password')}
          type="password"
          placeholder="Hasło"
          isError={!!errors.password}
        />
        <S.Input
          {...register('confirmPassword')}
          type="password"
          placeholder="Potwierdź hasło"
          isError={!!errors.confirmPassword}
        />

        <S.Button type="submit">Zarejestruj</S.Button>

        <Link to={routes.login}>
          Posiadasz już konto użytkownika? Zaloguj się!
        </Link>
      </S.Form>
    </S.Section>
  );
};

export default RegisterForm;
