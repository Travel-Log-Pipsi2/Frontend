import { useTranslation } from 'react-i18next';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const Notifications = (): JSX.Element => {
  const { t } = useTranslation('common');
  const { user } = useAuth();
  const { notifications } = user;

  return (
    <S.Wrapper>
      <h3>{t('common.friends_page.ui.title_request')}</h3>
      <ul>
        {notifications.map((notif) => (
          <S.Li key={notif.sender} highligth={notif.notification}>
            <p>{notif.sender}</p>
            <div className="controls">
              <button type="button">
                {t('common.friends_page.ui.accept_request')}
              </button>
              <button type="button">
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
