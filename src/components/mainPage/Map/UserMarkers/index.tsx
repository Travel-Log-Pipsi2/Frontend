/* eslint-disable react/no-array-index-key */
import { StyledGhostButton } from 'components/shared';
import { routes } from 'constants/routes';
import AddTravelContext from 'context/addTravel';
import { Fragment, useContext, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { IPlace } from 'types/types';
import getFullDate from 'utils/functions/getFullDate';
import CustomMarker from '../CustomMarker';
import PlacedPopup from '../Popup/PlacedPopup';

interface UserMarkersProps {
  markers: IPlace[];
}

const UserMarkers = ({ markers }: UserMarkersProps): JSX.Element => {
  const { t } = useTranslation('common');
  const [openMarker, setOpenMarker] = useState(null);
  const { initAdd } = useContext(AddTravelContext);
  const history = useHistory();

  const handleAddClick = (marker) => {
    initAdd({
      text: marker.name,
      latitude: marker.latitude,
      longitude: marker.longitude,
      name: marker.country,
    });
    history.push(routes.addTravel);
  };

  return (
    <>
      {markers.map((marker, index) => (
        <Fragment key={index}>
          <CustomMarker
            longitude={marker.longitude}
            latitude={marker.latitude}
            onClick={() => setOpenMarker(index)}
            color="blue"
          />
          {openMarker === index && (
            <PlacedPopup
              key={marker.name}
              marker={marker}
              closePopup={() => setOpenMarker(null)}
            >
              <h3>{marker.name}</h3>
              {marker.travels.map((travel) => (
                <div>
                  <h4>
                    <span>{getFullDate(travel.startDate)}</span>
                    <span> - </span>
                    <span>{getFullDate(travel.endDate)}</span>
                  </h4>
                  <p>{travel.description}</p>
                </div>
              ))}
              <StyledGhostButton
                small
                onClick={() => handleAddClick(marker)}
                style={{ marginTop: 20, marginLeft: 'auto' }}
              >
                {t('common.map.markers.add_new.existing')}
              </StyledGhostButton>
            </PlacedPopup>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default UserMarkers;
