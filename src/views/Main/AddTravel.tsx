import { AddTravelForm } from 'components';
import { useEffect } from 'react';

const AddTravel = (): JSX.Element => {
  useEffect(() => {
    console.log('Add payment component init');
  }, []);

  return (
    <section>
      <AddTravelForm />
    </section>
  );
};

export default AddTravel;
