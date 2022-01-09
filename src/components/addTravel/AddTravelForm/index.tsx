/* eslint-disable no-unused-expressions */
import { yupResolver } from '@hookform/resolvers/yup';
import AddTravelContext from 'context/addTravel';
import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { FormInput } from 'components/shared';
import DateInput from 'components/shared/DateInput';
import AuthAPI from 'services/api';
import useAuth from 'utils/hooks/useAuth';
import { validationSchema } from './schema';
import * as S from './styles';
import 'react-datepicker/dist/react-datepicker.css';

interface IFormInput {
  name: string;
  country: string;
  longitude: number;
  latitude: number;
  description: string;
  startDate: Date;
  endDate: Date;
}

const AddTravelForm = (): JSX.Element => {
  const { updateUserData } = useAuth();
  const { geoData } = useContext(AddTravelContext);
  const { t } = useTranslation('common');

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    geoData &&
      reset({
        name: geoData.text,
        longitude: geoData.longitude,
        latitude: geoData.latitude,
        country: geoData.name.split(', ').slice(-1)[0],
        description: '',
      });
  }, [geoData]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    AuthAPI.createTravel(data)
      .then(() => {
        toast.success(t('common.add_travel.notification.success'));
        reset({});
        updateUserData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <S.Wrapper>
      <h2>{t('common.add_travel.title')}</h2>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={register}
          name="name"
          type="text"
          error={errors.name}
          placeholder={t('common.add_travel.form.name')}
        />
        <FormInput
          register={register}
          name="country"
          type="text"
          error={errors.country}
          placeholder={t('common.add_travel.form.country')}
        />
        <FormInput
          register={register}
          name="longitude"
          type="text"
          error={errors.longitude}
          placeholder={t('common.add_travel.form.longitude')}
        />
        <FormInput
          register={register}
          name="latitude"
          type="text"
          error={errors.latitude}
          placeholder={t('common.add_travel.form.latitude')}
        />

        <DateInput
          control={control}
          name="startDate"
          error={errors.startDate}
          placeholder={t('common.add_travel.form.start_date')}
        />
        <DateInput
          control={control}
          name="endDate"
          error={errors.endDate}
          placeholder={t('common.add_travel.form.end_date')}
        />

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
