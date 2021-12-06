import { yupResolver } from '@hookform/resolvers/yup';
import AddTravelContext from 'context/addTravel';
import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as S from './styles';
import { validationSchema } from './schema';

interface IFormInput {
  name: string;
  longitude: number;
  latitude: number;
  description: string;
}

const AddTravelForm = (): JSX.Element => {
  const { geoData } = useContext(AddTravelContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    reset(geoData);
  }, [geoData]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    toast.success('Nowe miejsce dodane!');
    reset({});
  };

  return (
    <S.Wrapper>
      <h2>Dodaj podróż</h2>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          {...register('name')}
          type="text"
          placeholder="Nazwa miejsca"
          isError={!!errors.name}
        />
        <S.Input
          {...register('longitude')}
          type="text"
          placeholder="Długość geo"
          isError={!!errors.longitude}
        />
        <S.Input
          {...register('latitude')}
          type="text"
          placeholder="Szerokość geo"
          isError={!!errors.latitude}
        />
        <S.Textarea {...register('description')} placeholder="Opis miejsca" />
        <S.Button type="submit">Dodaj</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default AddTravelForm;
