import { useState } from 'react';
import { IPlace } from 'types/types';
import CustomMarker from '../CustomMarker';
import PlacedPopup from '../Popup/PlacedPopup';

interface UserMarkersProps {
  markers: IPlace[];
}

const getFullDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year}`;
};

const UserMarkers = ({ markers }: UserMarkersProps): JSX.Element => {
  const [openMarker, setOpenMarker] = useState(null);
  return (
    <>
      {markers.map((marker, index) => (
        <>
          <CustomMarker
            longitude={marker.longitude}
            latitude={marker.latitude}
            onClick={() => setOpenMarker(index)}
            color="blue"
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
                  <p>{travel.desc}</p>
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
