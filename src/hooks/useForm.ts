import { useState } from "react";

export const useForm = <T>(initialValues: T): [T, any] => {
  const [values, setValues] = useState(initialValues);

  return [
    values as T,
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
