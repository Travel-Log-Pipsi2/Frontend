import * as Yup from 'yup';

export interface ISendRequest {
  userId: string;
}

const validationSchema = Yup.object({
  userId: Yup.string().required('common.yup.required'),
});

export { validationSchema };
