import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import useTheme from 'utils/hooks/useTheme';
import SearchSVG from 'static/icons/search';
import useWindowDimensions from 'utils/hooks/useWindowDimension';
import useAuth from 'utils/hooks/useAuth';
import * as S from './styles';
import NotPlacedPopup from './Popup/NotPlacedPopup';
import UserMarkers from './UserMarkers';
import CustomMarker from './CustomMarker';

const Map = (): JSX.Element => {
  const [searchActive, setSearchActive] = useState(false);
  const [tempMarker, setTempMarker] = useState(null);
  const [tempMarkerPopup, setTempMarkerPopup] = useState(false);
  const [mapSettings, setMapSettings] = useState({
    width: '100vw',
    height: '400px',
  });
  const [viewport, setViewport] = useState({
    latitude: 50.0121,
    longitude: 20.9858,
    zoom: 3,
  });
  const mapRef = useRef();
  const { user, isAuthenticated } = useAuth();
  const { isDarkMode } = useTheme();
  const [userMarkers, setUserMarkers] = useState([]);
  const { width } = useWindowDimensions();

  console.log('CASE', user);
  console.log('IS AUTH', isAuthenticated);

  useEffect(() => {
    if (width >= 1024) {
      setMapSettings({ width: '100%', height: '100%' });
    } else {
      setMapSettings({ width: '100%', height: '400px' });
    }
  }, [width]);

  useEffect(() => {
    if (isAuthenticated) setUserMarkers(user.places);
  }, [isAuthenticated, user]);

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
    <S.MapWrapper className="map-wrapper">
      <S.GeocoderWrapper isActive={searchActive}>
        <S.SearchIcon onClick={handleSearchActivation}>
          <SearchSVG />
        </S.SearchIcon>
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
        className="mapboxgl-map"
        {...viewport}
        width={mapSettings.width}
        height={mapSettings.height}
        onViewportChange={handleViewportChange}
      >
        {tempMarker && (
          <CustomMarker
            longitude={tempMarker.longitude}
            latitude={tempMarker.latitude}
            onClick={() => setTempMarkerPopup(true)}
            color="purple"
          />
        )}

        {tempMarker && tempMarkerPopup && (
          <NotPlacedPopup
            marker={tempMarker}
            closePopup={() => setTempMarkerPopup(false)}
          />
        )}

        <UserMarkers markers={userMarkers} />
      </ReactMapGL>
    </S.MapWrapper>
  );
};

export default React.memo(Map);
