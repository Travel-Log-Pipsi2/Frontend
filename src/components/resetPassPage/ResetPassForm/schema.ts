import * as Yup from 'yup';

const validationSchema = Yup.object({
  newPassword: Yup.string().required('common.yup.required'),
  confirmNewPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'common.yup.password_not_match'
  ),
});

export { validationSchema };
