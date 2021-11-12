import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  latitute: Yup.string().required(),
  longitute: Yup.string().required(),
  description: Yup.string(),
});

export { validationSchema };
