import { FriendsList, Notifications, SendRequest } from 'components/friends';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  > h2 {
    color: ${(props) => props.theme.colors.black};
    text-align: center;
  }
`;

const Friends = () => {
  const { t } = useTranslation('common');

  return (
    <SectionWrapper>
      <h2>{t('common.friends_page.ui.title')}</h2>
      <Notifications />
      <SendRequest />
      <FriendsList />
    </SectionWrapper>
  );
};

export default Friends;
