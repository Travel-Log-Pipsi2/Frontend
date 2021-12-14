import { yupResolver } from '@hookform/resolvers/yup';
import AddTravelContext from 'context/addTravel';
import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('addTravel');

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
    toast.success(t('addTravel.notification.success'));
    reset({});
  };

  return (
    <S.Wrapper>
      <h2>{t('addTravel.title')}</h2>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          {...register('name')}
          type="text"
          placeholder={t('addTravel.form.name')}
          isError={!!errors.name}
        />
        <S.Input
          {...register('longitude')}
          type="text"
          placeholder={t('addTravel.form.longitude')}
          isError={!!errors.longitude}
        />
        <S.Input
          {...register('latitude')}
          type="text"
          placeholder={t('addTravel.form.latitude')}
          isError={!!errors.latitude}
        />
        <S.Textarea
          {...register('description')}
          placeholder={t('addTravel.form.description')}
        />
        <S.Button type="submit">{t('addTravel.form.button')}</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default AddTravelForm;
