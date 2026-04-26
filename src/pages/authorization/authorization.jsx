import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import styled from 'styled-components';

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Поле обязательно для заполнения')
    .matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
    .min(3, 'Минимум 3 символа')
    .max(20, 'Максимум 20 символов'),
  password: yup
    .string()
    .required('Поле обязательно для заполнения')
    .matches(/^[\w#%]+$/, 'Пароль должен содержать допустимые символы')
    .min(8, 'Минимум 8 символа')
    .max(30, 'Максимум 30 символов'),
});

const AuthoriazationContainer = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState('');

  const onSubmit = ({ login, password }) => {
    server.autorize(login, password).then(({ error }) => {
      if (error) {
        setServerError(`Ошибка запроса : ${error}`);
      }
    });
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  return (
    <div className={className}>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="login" {...register('login')} />
        <input
          type="password"
          placeholder="password"
          {...register('password')}
        />
        <button type="submit" disabled={!!formError}>
          Войти
        </button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
};

export const Authorization = styled(AuthoriazationContainer)`
  margin: 0 auto;
`;
