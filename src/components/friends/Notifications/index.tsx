/* eslint-disable function-paren-newline */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import AuthAPI from 'services/api';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const Notifications = (): JSX.Element => {
  const { t } = useTranslation('common');
  const { user, updateUserData } = useAuth();
  const { notifications } = user;

  useEffect(() => {
    updateUserData();
  }, []);

  const handleAccept = (invitationId: number) => {
    AuthAPI.acceptInvite(invitationId)
      .then(() => {
        toast.success(t('common.friends_page.notifications.requests.accept'));
        updateUserData();
      })
      .catch(() =>
        toast.error(t('common.friends_page.notifications.requests.error'))
      );
  };

  const handleDecline = (invitationId: number) => {
    AuthAPI.deleteInvite(invitationId)
      .then(() => {
        toast.success(t('common.friends_page.notifications.requests.decline'));
        updateUserData();
      })
      .catch(() =>
        toast.error(t('common.friends_page.notifications.requests.error'))
      );
  };

  return (
    <S.Wrapper>
      <h3>{t('common.friends_page.ui.title_request')}</h3>
      <ul>
        {notifications.map((notif) => (
          <S.Li key={notif.id} highligth={notif.notification}>
            <p>{notif.username}</p>
            <div className="controls">
              <button type="button" onClick={() => handleAccept(notif.id)}>
                {t('common.friends_page.ui.accept_request')}
              </button>
              <button type="button" onClick={() => handleDecline(notif.id)}>
                {t('common.friends_page.ui.decline_request')}
              </button>
            </div>
          </S.Li>
        ))}
      </ul>
    </S.Wrapper>
  );
};

export default Notifications;
