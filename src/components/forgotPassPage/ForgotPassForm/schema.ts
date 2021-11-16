import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
});

export { validationSchema };
