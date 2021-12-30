import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('common.yup.email').required('common.yup.required'),
  password: Yup.string().required('common.yup.required'),
});

export { validationSchema };
