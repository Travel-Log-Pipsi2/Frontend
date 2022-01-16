import * as Yup from 'yup';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;

const validationSchema = Yup.object({
  username: Yup.string().required('common.yup.required'),
  email: Yup.string().email('common.yup.email').required('common.yup.required'),
  password: Yup.string()
    .required('common.yup.required')
    .matches(passwordRegex, 'common.yup.password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'common.yup.password_not_match'
  ),
});

export { validationSchema };
