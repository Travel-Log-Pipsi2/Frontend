import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  latitude: Yup.string().required(),
  longitude: Yup.string().required(),
  description: Yup.string(),
});

export { validationSchema };
