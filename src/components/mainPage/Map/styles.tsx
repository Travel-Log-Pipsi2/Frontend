import styled from 'styled-components';

const MapWrapper = styled.div`
  margin-top: 48px;
  position: relative;
`;

const SearchIcon = styled.div`
  width: 40px;
  aspect-ratio: 1;
  background-color: #f3f3f4;
  border: 1px solid #353535;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 20px;
    height: 20px;
  }
`;

const GeocoderWrapper = styled.div<{ isActive: boolean }>`
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .react-geocoder {
    position: relative;
    width: ${({ isActive }) => (isActive ? '300px' : '0px')};
    transition: all 500ms ease;
    left: -20px;

    > input {
      width: 100%;
      padding-left: ${({ isActive }) => (isActive ? '24px' : '0px')};
      padding-block: 6px;
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.colors.black};
      outline: none;
      transition: all 500ms ease;
      font-size: 16px;
    }

    .react-geocoder-results {
      border: 1px solid ${({ theme }) => theme.colors.black};
      background-color: #f3f3f4;
      border-radius: 8px;
      position: absolute;
      top: 95%;
      left: 10px;
      padding-block: 6px;
      padding-inline: 12px;
      overflow: scroll;
      overflow-x: hidden;
      max-height: 300px;
    }

    .react-geocoder-item {
      margin-bottom: 4px;
      padding-bottom: 4px;
      border-bottom: 1px solid #cecece;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

export { MapWrapper, SearchIcon, GeocoderWrapper };
