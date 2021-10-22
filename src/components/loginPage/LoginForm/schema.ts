import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export { validationSchema };
