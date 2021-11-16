import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]),
});

export { validationSchema };
