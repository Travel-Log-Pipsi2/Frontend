import { Controller } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import pl from 'date-fns/locale/pl';

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const Wrapper = styled.div<{ isError: boolean }>`
  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid ${({ theme }) => theme.colors.black};
        border-radius: 8px;
        font-size: ${({ theme }) => theme.typography.size.p};
        font-family: ${({ theme }) => theme.typography.family.main};

        ${({ isError }) => isError && 'border-color: red;'}
      }
    }
  }

  .datepicker-header {
    display: flex;
    justify-content: space-between;
    margin-inline: 20px;

    span,
    button {
      font-weight: 700;
    }

    button {
      cursor: pointer;

      &:hover {
        background-color: transparent;
        color: ${(props) => props.theme.colors.primary[500]};
      }
    }
  }
`;

const months = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  pl: [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrześnień',
    'Październik',
    'Listopad',
    'Grudzień',
  ],
};

registerLocale('pl', pl);

const DateInput = ({ control, name, error, placeholder, ...rest }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation('common');
  return (
    <Wrapper isError={error}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            placeholderText={placeholder}
            locale={language}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div className="datepicker-header">
                <button type="button" onClick={decreaseMonth}>
                  {'<'}
                </button>
                <span>
                  {`${months[language][date.getMonth()]} ${date.getFullYear()}`}
                </span>
                <button type="button" onClick={increaseMonth}>
                  {'>'}
                </button>
              </div>
            )}
          />
        )}
        {...rest}
      />
      {error && <ErrorMessage>{error && t(error.message)}</ErrorMessage>}
    </Wrapper>
  );
};

export default DateInput;
