/* eslint-disable no-underscore-dangle */
import * as Yup from 'yup';

const latitudeRegex =
  /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;

const longitudeRegex =
  /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;

const cutDecimals = (value: string): string => {
  if (value) {
    const _value = value.toString().replace(/[^\d.]/g, '');
    const _valueParts = _value.split('.');
    const _valuePartsLength = _valueParts.length;

    if (_valuePartsLength < 2) return `${_valueParts[0].slice(0, 3)}`;
    if (_valuePartsLength > 2) {
      return `${_valueParts[0].slice(0, 3)}.${_valueParts[1].slice(0, 6)}`;
    }
    if (_valuePartsLength === 2) {
      return `${_valueParts[0].slice(0, 3)}.${_valueParts[1].slice(0, 6)}`;
    }
    return _value;
  }
  return value;
};

const validationSchema = Yup.object({
  name: Yup.string().required('common.yup.required'),
  country: Yup.string().required('common.yup.required'),
  latitude: Yup.string()
    .required('common.yup.required')
    .matches(latitudeRegex, 'common.yup.latitude'),
  longitude: Yup.string()
    .required('common.yup.required')
    .matches(longitudeRegex, 'common.yup.longitude'),
  description: Yup.string(),
  startDate: Yup.date().required('common.yup.required'),
  endDate: Yup.date().required('common.yup.required'),
});

export { validationSchema, cutDecimals };
