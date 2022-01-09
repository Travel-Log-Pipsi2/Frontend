import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import AuthAPI from 'services/api';
import getFullDate from 'utils/functions/getFullDate';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';

const TravelsList = (): JSX.Element => {
  const { user, updateUserData } = useAuth();
  const { t } = useTranslation('common');
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setPlaces(user.places);
  }, [user]);

  const handleDeleteButton = (travelId) => {
    AuthAPI.deleteTravel(travelId)
      .then(() => {
        updateUserData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <S.Wrapper>
      <h2>{t('common.travels.ui.title')}</h2>

      {places.map(({ name, country, travels }) => (
        <S.Places>
          <h3>{name}</h3>
          <h4>{country}</h4>

          <S.Travels>
            {travels?.map(({ description, endDate, startDate, id }) => (
              <S.Travel>
                <button type="button" onClick={() => handleDeleteButton(id)}>
                  {t('common.travels.ui.button_delete')}
                </button>
                <span>
                  {`${getFullDate(startDate)} - ${getFullDate(endDate)}`}
                </span>
                <p>{description}</p>
              </S.Travel>
            ))}
          </S.Travels>
        </S.Places>
      ))}
    </S.Wrapper>
  );
};

export default TravelsList;
