import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useAuth from 'utils/hooks/useAuth';
import useFriendsStatistic from 'utils/hooks/useFriendStatistics';
import { FriendMarkersCtx } from 'views/MainPage';
import * as S from './styles';

const Statistics = (): JSX.Element => {
  const { t } = useTranslation('common');
  const { setFriendMarkers } = useContext(FriendMarkersCtx);
  const {
    user: { statistics },
  } = useAuth();
  const {
    countryCount,
    currentYearCountryCount,
    currentYearTravelCount,
    dayTravelCount,
    mostTravelledToCountry,
    travelCount,
    markerCount,
  } = statistics;
  const { isFriendView, friendStats, friendMarkers } = useFriendsStatistic();

  useEffect(() => {
    if (friendMarkers) {
      setFriendMarkers(friendMarkers);
    }
  }, [friendMarkers]);

  return (
    <S.Wrapper>
      <h3>{t('common.profile_page.ui.stats.title')}</h3>
      <ul>
        <li>
          <span>{t('common.profile_page.ui.stats.all_places')}</span>
          {!isFriendView ? (
            <span>{markerCount}</span>
          ) : (
            <span>{friendStats?.markerCount}</span>
          )}
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.all_countries')}</span>
          {!isFriendView ? (
            <span>{countryCount}</span>
          ) : (
            <span>{friendStats?.countryCount}</span>
          )}
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.all_travels')}</span>
          {!isFriendView ? (
            <span>{travelCount}</span>
          ) : (
            <span>{friendStats?.travelCount}</span>
          )}
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.add_days_in_travel')}</span>
          {!isFriendView ? (
            <span>{dayTravelCount}</span>
          ) : (
            <span>{friendStats?.dayTravelCount}</span>
          )}
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.curr_year_countries')}</span>
          {!isFriendView ? (
            <span>{currentYearCountryCount}</span>
          ) : (
            <span>{friendStats?.currentYearCountryCount}</span>
          )}
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.curr_year_travels')}</span>
          {!isFriendView ? (
            <span>{currentYearTravelCount}</span>
          ) : (
            <span>{friendStats?.currentYearTravelCount}</span>
          )}
        </li>
        <li>
          <span>{t('common.profile_page.ui.stats.most_visited_country')}</span>
          {!isFriendView ? (
            <span>{mostTravelledToCountry}</span>
          ) : (
            <span>{friendStats?.mostTravelledToCountry}</span>
          )}
        </li>
      </ul>
    </S.Wrapper>
  );
};

export default Statistics;
