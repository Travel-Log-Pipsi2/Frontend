import React from 'react';
import { IPlace } from 'types/types';
import * as S from './styles';

interface Props {
  marker: IPlace;
  closePopup: () => void;
  children: React.ReactNode;
}

const PlacedPopup = ({ marker, closePopup, children }: Props) => (
  <S.StyledPopup
    latitude={marker.latitude}
    longitude={marker.longitude}
    onClose={closePopup}
    closeButton
    closeOnClick={false}
    offsetTop={0}
    offsetLeft={20}
  >
    {children}
  </S.StyledPopup>
);

export default PlacedPopup;
