import { useState } from 'react';

import { IPlace } from 'types/types';
import getFullDate from 'utils/functions/getFullDate';
import CustomMarker from '../CustomMarker';
import PlacedPopup from '../Popup/PlacedPopup';

interface UserMarkersProps {
  markers: IPlace[];
}

const UserMarkers = ({ markers }: UserMarkersProps): JSX.Element => {
  const [openMarker, setOpenMarker] = useState(null);

  return (
    <>
      {markers?.map((marker, index) => (
        <>
          <CustomMarker
            longitude={marker.longitude}
            latitude={marker.latitude}
            onClick={() => setOpenMarker(index)}
            color="teal"
          />
          {openMarker === index && (
            <PlacedPopup marker={marker} closePopup={() => setOpenMarker(null)}>
              <h3>{marker.name}</h3>
              {marker.travels.map((travel) => (
                <div>
                  <h4>
                    <span>{getFullDate(travel.startDate)}</span>
                    <span> - </span>
                    <span>{getFullDate(travel.endDate)}</span>
                  </h4>
                </div>
              ))}
            </PlacedPopup>
          )}
        </>
      ))}
    </>
  );
};

export default UserMarkers;
