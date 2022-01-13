/* eslint-disable function-paren-newline */
import { yupResolver } from '@hookform/resolvers/yup';
import { FormInput, StyledPrimaryButton } from 'components/shared';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import AuthAPI from 'services/api';
import useAuth from 'utils/hooks/useAuth';
import { ISendRequest, validationSchema } from './schema';
import * as S from './styles';

const SendRequest = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISendRequest>({
    resolver: yupResolver(validationSchema),
  });
  const { updateUserData } = useAuth();
  const { t } = useTranslation('common');

  const onSubmit: SubmitHandler<ISendRequest> = ({ userId }) => {
    AuthAPI.sendInvite(userId)
      .then(() => {
        toast.success(t('common.friends_page.notifications.send.success'));
        updateUserData();
        reset();
      })
      .catch(() =>
        toast.error(t('common.friends_page.notifications.send.error'))
      );
  };

  return (
    <S.Wrapper>
      <h3>{t('common.friends_page.ui.title_send')}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register}
          name="userId"
          error={errors.userId}
          placeholder="ID użytkownika"
        />

        <StyledPrimaryButton type="submit">Zaproś</StyledPrimaryButton>
      </form>
    </S.Wrapper>
  );
};

export default SendRequest;
