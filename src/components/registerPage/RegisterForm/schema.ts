import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('common.yup.required'),
  email: Yup.string().email('common.yup.email').required('common.yup.required'),
  password: Yup.string().required('common.yup.required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'common.yup.password_not_match'
  ),
});

export { validationSchema };
