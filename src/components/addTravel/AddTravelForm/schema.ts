import * as Yup from 'yup';

const latitudeRegex =
  /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;

const longitudeRegex =
  /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;

const validationSchema = Yup.object({
  name: Yup.string().required('common.yup.required'),
  country: Yup.string().required('common.yup.required'),
  latitude: Yup.string()
    .required('common.yup.required')
    .matches(latitudeRegex, 'common.yup.latitude'),
  longitude: Yup.string()
    .required('common.yup.required')
    .matches(longitudeRegex, 'common.yup.longitude'),
  desc: Yup.string(),
  startDate: Yup.date().required('common.yup.required'),
  endDate: Yup.date().required('common.yup.required'),
});

export { validationSchema };
