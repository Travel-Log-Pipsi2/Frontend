/* eslint-disable function-paren-newline */
import { routes } from 'constants/routes';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth from 'utils/hooks/useAuth';
import AuthAPI from 'services/api';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { FormInput } from 'components/shared';
import FacebookLogin from 'react-facebook-login';
import { validationSchema } from './schema';
import * as S from './styles';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = (): JSX.Element => {
  const { t } = useTranslation(['common']);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });
  const { isAuthenticated, loginCtx } = useAuth();

  const onSubmit: SubmitHandler<FormData> = (values) => {
    AuthAPI.login(values)
      .then(({ data }) => {
        console.log(data);
        if (data.message.includes('not activated')) {
          toast.error(t('common.login_page.notification.not_active'));
        } else if (data.message.includes('is not correct')) {
          toast.error(t('common.login_page.notification.bad_credential'));
        } else {
          toast.success(t('common.login_page.notification.success'));
          loginCtx(data.content);
        }
      })
      .catch(() => toast.error(t('common.login_page.notification.error')));
  };

  const responseFacebook = (fbResponse) => {
    AuthAPI.loginWithFacebook(fbResponse)
      .then(({ data }) => {
        loginCtx(data.content);
        toast.success(t('common.login_page.notification.success'));
      })
      .catch((err) => toast.error(err));
  };

  if (isAuthenticated) {
    return <Redirect to={routes.home} />;
  }

  return (
    <S.Section>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>{t('common.login_page.ui.title')}</h1>

        <FormInput
          register={register}
          name="email"
          type="email"
          error={errors.email}
          placeholder={t('common.login_page.form.email')}
        />

        <FormInput
          register={register}
          name="password"
          type="password"
          error={errors.password}
          placeholder={t('common.login_page.form.password')}
        />

        <S.Button type="submit">{t('common.login_page.ui.button')}</S.Button>

        <FacebookLogin
          appId="1106139623477619"
          fields="name,email"
          scope="public_profile,user_posts"
          callback={responseFacebook}
          icon="fa-facebook"
          cssClass="my-facebook-button-class"
          textButton="Facebook"
        />

        <Link to={routes.register}>{t('common.login_page.ui.no_account')}</Link>

        <Link to={routes.forgotPass}>
          {t('common.login_page.ui.forget_password')}
        </Link>
      </S.Form>
    </S.Section>
  );
};

export default LoginForm;
