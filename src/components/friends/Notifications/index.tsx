import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const Notifications = (): JSX.Element => {
  const { user } = useAuth();
  const { notifications } = user;

  return (
    <S.Wrapper>
      <h3>Friends requests</h3>
      <ul>
        {notifications.map((notif) => (
          <S.Li key={notif.sender} highligth={notif.notification}>
            <p>{notif.sender}</p>
            <div className="controls">
              <button type="button">Accept</button>
              <button type="button">Decline</button>
            </div>
          </S.Li>
        ))}
      </ul>
    </S.Wrapper>
  );
};

export default Notifications;
