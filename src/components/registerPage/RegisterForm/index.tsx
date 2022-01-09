import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';
import useAuth from 'utils/hooks/useAuth';
import AuthAPI from 'services/api';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { FormInput } from 'components/shared';
import * as S from './styles';
import { validationSchema } from './schema';

interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = (): JSX.Element => {
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const { isAuthenticated } = useAuth();
  const [accCreated, setAccCreated] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (values) => {
    AuthAPI.register(values)
      .then((res) => {
        console.log(res);
        setAccCreated(true);
        toast.success(t('common.register_page.notification.success'));
      })
      .catch(() => toast.error(t('common.register_page.notification.error')));
  };

  if (isAuthenticated) {
    return <Redirect to={routes.home} />;
  }

  if (accCreated) {
    return <Redirect to={routes.login} />;
  }

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>{t('common.register_page.ui.title')}</h1>

        <FormInput
          register={register}
          name="username"
          type="text"
          error={errors.username}
          placeholder={t('common.register_page.form.username')}
        />

        <FormInput
          register={register}
          name="email"
          type="email"
          error={errors.email}
          placeholder={t('common.register_page.form.email')}
        />

        <FormInput
          register={register}
          name="password"
          type="password"
          error={errors.password}
          placeholder={t('common.register_page.form.password')}
        />

        <FormInput
          register={register}
          name="confirmPassword"
          type="password"
          error={errors.confirmPassword}
          placeholder={t('common.register_page.form.confirm_password')}
        />

        {console.log(errors.confirmPassword)}

        <S.Button type="submit">{t('common.register_page.ui.button')}</S.Button>

        <Link to={routes.login}>
          {t('common.register_page.ui.have_account')}
        </Link>
      </S.Form>
    </S.Section>
  );
};

export default RegisterForm;
