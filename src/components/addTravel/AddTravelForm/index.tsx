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
  const { t } = useTranslation('common');

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
    toast.success(t('common.add_travel.notification.success'));
    reset({});
  };

  return (
    <S.Wrapper>
      <h2>{t('common.add_travel.title')}</h2>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          {...register('name')}
          type="text"
          placeholder={t('common.add_travel.form.name')}
          isError={!!errors.name}
        />
        <S.Input
          {...register('longitude')}
          type="text"
          placeholder={t('common.add_travel.form.longitude')}
          isError={!!errors.longitude}
        />
        <S.Input
          {...register('latitude')}
          type="text"
          placeholder={t('common.add_travel.form.latitude')}
          isError={!!errors.latitude}
        />
        {console.log(errors)}
        <S.Textarea
          {...register('description')}
          placeholder={t('common.add_travel.form.description')}
        />
        <S.Button type="submit">{t('common.add_travel.form.button')}</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default AddTravelForm;
