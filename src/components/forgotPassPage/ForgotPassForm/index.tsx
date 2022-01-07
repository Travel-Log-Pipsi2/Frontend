/* eslint-disable function-paren-newline */
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthAPI from 'services/api';
import { toast } from 'react-toastify';

import { Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';
import { useTranslation } from 'react-i18next';
import { FormInput } from 'components/shared';
import { validationSchema } from './schema';
import * as S from './styles';

interface IFormInput {
  email: string;
}

const ForgotPassForm = () => {
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });
  const [resetSend, setResetSend] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = ({ email }) => {
    AuthAPI.forgotPassword(email).then(({ data }) => {
      if (data.statusCode !== 200) {
        toast.error(t('common.forgot_password_page.notification.error'));
      } else {
        toast.success(t('common.forgot_password_page.notification.success'));
        setResetSend(true);
      }
    });
  };

  if (resetSend) {
    return <Redirect to={routes.login} />;
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <h1>{t('common.forgot_password_page.ui.title')}</h1>
        <FormInput
          register={register}
          type="email"
          name="email"
          error={errors.email}
          placeholder={t('common.forgot_password_page.form.email')}
        />

        <S.Button type="submit">
          {t('common.forgot_password_page.ui.button')}
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default ForgotPassForm;
