import { ChangeEvent, useState } from 'react';

type TInitialValues = Record<string, any>;

type TEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export const useForm = <T = TInitialValues>(initialValues: TInitialValues) => {
  const [values, setValues] = useState(initialValues as T);

  const handleChange = ({ target }: TEvent) => {
    const { value, name } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const clearFields = () => {
    setValues(initialValues as T);
  };

  return {
    values,
    handleChange,
    clearFields,
  };
};
