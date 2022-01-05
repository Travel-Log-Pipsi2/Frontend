import { Notifications } from 'components/friends';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  > h2 {
    color: ${(props) => props.theme.colors.black};
    text-align: center;
  }
`;

const Friends = () => (
  <SectionWrapper>
    <h2>Friends</h2>
    <Notifications />
  </SectionWrapper>
);

export default Friends;
