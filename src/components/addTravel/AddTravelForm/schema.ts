import * as Yup from 'yup';

const pointsRegex = /^[0-9]{1,3}.[0-9]{0,6}/;

const validationSchema = Yup.object({
  name: Yup.string().required(),
  latitude: Yup.string().required('common.yup.required'),
  longitude: Yup.string().required('common.yup.required'),
  description: Yup.string(),
});

export { validationSchema };
