/* eslint-disable function-paren-newline */
import { routes } from 'constants/routes';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth from 'utils/hooks/useAuth';
import AuthAPI from 'services/api';
import { validationSchema } from './schema';
import * as S from './styles';

interface IFormInput {
  username: string;
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
  const { isAuthenticated, loginCtx } = useAuth();

  const onSubmit: SubmitHandler<IFormInput> = ({ username, password }) => {
    AuthAPI.login(username, password)
      .then(() => loginCtx())
      .catch((err) => console.log(err));
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Logowanie</h1>

        <S.Input
          {...register('username')}
          type="text"
          placeholder="Nazwa użytkownika"
          isError={!!errors.username}
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
