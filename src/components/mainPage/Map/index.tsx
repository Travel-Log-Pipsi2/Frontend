import React, { useCallback, useRef, useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { useHistory } from 'react-router-dom';
import useTheme from 'utils/hooks/useTheme';
import * as S from './styles';
import Marker from './Marker';
import NotPlacedPopup from './Popup';

const mapStyle = {
  width: '100%',
  height: 400,
};

const Map = (): JSX.Element => {
  const [searchActive, setSearchActive] = useState(false);
  const [tempMarker, setTempMarker] = useState(null);
  const [tempMarkerPopup, setTempMarkerPopup] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 50.0121,
    longitude: 20.9858,
    zoom: 3,
  });
  const mapRef = useRef();
  const history = useHistory();
  const { isDarkMode } = useTheme();

  const handleViewportChange = useCallback((newViewport) => {
    setViewport(newViewport);
  }, []);

  const handleSelect = useCallback((newViewport, item) => {
    setViewport(newViewport);
    setTempMarker({
      name: item.place_name,
      longitude: item.center[0],
      latitude: item.center[1],
      ...item,
    });
  }, []);

  const handleSearchActivation = useCallback(
    () => setSearchActive((prevState) => !prevState),
    []
  );

  return (
    <S.MapWrapper>
      <S.GeocoderWrapper isActive={searchActive}>
        <S.SearchIcon onClick={handleSearchActivation} />
        <Geocoder
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onSelected={handleSelect}
          viewport={viewport}
          mapRef={mapRef}
        />
      </S.GeocoderWrapper>

      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={
          isDarkMode
            ? 'mapbox://styles/mapbox/dark-v10'
            : 'mapbox://styles/shiragaira/ckuhj4iu702br17mns49xrreu'
        }
        ref={mapRef}
        {...mapStyle}
        {...viewport}
        onViewportChange={handleViewportChange}
      >
        {tempMarker && (
          <Marker
            longitude={tempMarker.longitude}
            latitude={tempMarker.latitude}
            onClick={() => setTempMarkerPopup(true)}
          />
        )}

        {tempMarker && tempMarkerPopup && (
          <NotPlacedPopup
            marker={tempMarker}
            closePopup={() => setTempMarkerPopup(false)}
          />
        )}
      </ReactMapGL>
    </S.MapWrapper>
  );
};

export default React.memo(Map);
