import { routes } from 'constants/routes';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth from 'utils/hooks/useAuth';
import { validationSchema } from './schema';

import * as S from './styles';

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const { isAuthenticated, login } = useAuth();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    login(data.email, data.password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h1>Login</h1>
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
        <S.Button type="submit">Zaloguj</S.Button>
        <Link to={routes.register}>
          Nie posiadasz jeszcze swoje konta? Załóż je!
        </Link>
      </S.Form>
    </S.Section>
  );
};

export default LoginForm;
