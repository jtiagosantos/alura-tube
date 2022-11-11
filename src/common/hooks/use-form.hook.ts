import { ChangeEvent, useState } from 'react';

type TInitialValues = Record<string, any>;

type TEvent = ChangeEvent<HTMLInputElement>;

export const useForm = (initialValues: TInitialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = ({ target }: TEvent) => {
    const { value, name } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const clearFields = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    clearFields,
  };
};
