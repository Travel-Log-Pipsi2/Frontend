import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import AuthAPI from 'services/api';
import * as S from './styles';
import { validationSchema } from './schema';

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const ResetPassForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = ({
    email,
    password,
    confirmPassword,
  }) => {
    AuthAPI.resetPassword(
      email,
      password,
      confirmPassword,
      'TOKEN PLACE HOLDER'
    )
      .then(() => {
        console.log('Reset success');
      })
      .catch((err) => console.log(err));
  };

  return (
    <S.Wrapper>
      <h1>Reset hasła</h1>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="Potwierdz hasło"
          isError={!!errors.confirmPassword}
        />
        <S.Button type="submit">Zresetuj hasło</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default ResetPassForm;
