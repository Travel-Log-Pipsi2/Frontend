import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import AuthAPI from 'services/api';
import { Redirect, useLocation } from 'react-router-dom';
import { routes } from 'constants/routes';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { FormInput } from 'components/shared';
import * as S from './styles';
import { validationSchema } from './schema';

interface IFormInput {
  password: string;
  confirmPassword: string;
}

const ResetPassForm = (): JSX.Element => {
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const [resetSuccess, setResetSuccess] = useState(false);

  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const token = urlParams.get('Token');
  const email = urlParams.get('Email');

  const onSubmit: SubmitHandler<IFormInput> = ({
    password,
    confirmPassword,
  }) => {
    AuthAPI.resetPassword(email, password, confirmPassword, token).then(
      (data) => {
        if (data.statusCode === 200) {
          toast.success('Hasło zresetowano pomyślnie. Możesz się zalogować.');
          setResetSuccess(true);
        } else {
          toast.error('Coś poszło nie tak, spróbuj ponownie zresetować hasło!');
        }
      }
    );
  };

  if (resetSuccess) {
    return <Redirect to={routes.login} />;
  }

  return (
    <S.Wrapper>
      <h1>{t('common.reset_password_page.ui.title')}</h1>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register}
          type="password"
          name="password"
          error={errors.password}
          placeholder={t('common.reset_password_page.form.password')}
        />

        <FormInput
          register={register}
          type="password"
          name="confirmPassword"
          error={errors.confirmPassword}
          placeholder={t('common.reset_password_page.form.confirm_password')}
        />

        <S.Button type="submit">
          {t('common.reset_password_page.ui.button')}
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default ResetPassForm;
