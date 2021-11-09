import { createContext } from 'react';
import { IAddTravelContextType } from 'types/types';

const AddTravelContext = createContext<IAddTravelContextType>(
  {} as IAddTravelContextType
);

export default AddTravelContext;
