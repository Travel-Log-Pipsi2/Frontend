import { StyledPrimaryButton } from 'components/shared';
import { Popup } from 'react-map-gl';
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
  .mapboxgl-popup-content {
    border-radius: 8px;
    padding-inline: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .mapboxgl-popup-close-button {
      width: 20px;
      height: 20px;
    }

    h3 {
      font-size: 18px;
    }

    h4 {
      font-size: 16px;
    }
  }
`;

const Button = styled(StyledPrimaryButton)``;

export { StyledPopup, Button };
