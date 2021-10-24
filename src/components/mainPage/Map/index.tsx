import { useCallback, useRef, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import MarkerSVG from 'static/icons/marker';
import * as S from './styles';

const mapStyle = {
  width: '100%',
  height: 400,
};

const Map = (): JSX.Element => {
  const [searchActive, setSearchActive] = useState(false);
  const [tempMarker, setTempMarker] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 50.0121,
    longitude: 20.9858,
    zoom: 3,
  });
  const mapRef = useRef();

  const handleViewportChange = useCallback((newViewport, item) => {
    setViewport(newViewport);
  }, []);

  const handleSelect = useCallback((newViewport, item) => {
    setViewport(newViewport);
    setTempMarker({
      name: item.place_name,
      longitude: item.center[0],
      latitude: item.center[1],
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
        mapStyle="mapbox://styles/shiragaira/ckuhj4iu702br17mns49xrreu"
        ref={mapRef}
        {...mapStyle}
        {...viewport}
        onViewportChange={handleViewportChange}
      >
        {tempMarker && (
          <S.StyledMarker
            longitude={tempMarker.longitude}
            latitude={tempMarker.latitude}
          >
            <MarkerSVG />
          </S.StyledMarker>
        )}
      </ReactMapGL>
    </S.MapWrapper>
  );
};

export default Map;
