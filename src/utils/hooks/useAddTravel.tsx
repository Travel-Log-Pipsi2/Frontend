import AddTravelContext from 'context/addTravel';
import React, { useContext, useMemo, useState } from 'react';

export function AddTravelProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [geoData, setGeoData] = useState(null);

  const initAdd = (point) => {
    setGeoData(point);
  };

  const memoedValue = useMemo(
    () => ({
      geoData,
      initAdd,
    }),
    [geoData]
  );

  return (
    <AddTravelContext.Provider value={memoedValue}>
      {children}
    </AddTravelContext.Provider>
  );
}

export default function useAddTravel() {
  return useContext(AddTravelContext);
}
