import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import './App.css';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const capitalizeString = (string: string) => `${string[0].toUpperCase()}${string.slice(1)}`;

const App = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: 'Artem',
      phone: '+380681234567',
      email: 'artem.karimov@gmail.com',
      message: 'My new message',
    },
  });

  const fields = useMemo(() => ['name', 'phone', 'email', 'message'] as const, []);

  const onSubmit = useCallback((values: FormValues) => console.log(values), []);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {fields.map(field => (
        <div key={field} className="form-group">
          <label htmlFor={field}>{capitalizeString(field)}</label>
          <input type="text" id={field} {...register(field)} />
        </div>
      ))}
      <button type="submit" className="submit-button">
        Get values
      </button>
    </form>
  );
};

export default App;
