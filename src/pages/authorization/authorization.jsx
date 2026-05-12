import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { setUser } from '../../actions';
import * as yup from 'yup';
import { Link, Navigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../bff';
import styled from 'styled-components';
import { Input, Button, H2 } from '../../components';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants';

const authFormSchema = yup.object().shape({
    login: yup
        .string()
        .required('Заполните логин')
        .matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
        .min(3, 'Минимум 3 символа')
        .max(20, 'Максимум 20 символов'),
    password: yup
        .string()
        .required('Заполните пароль')
        .matches(/^[\w#%]+$/, 'Пароль должен содержать допустимые символы')
        .min(8, 'Минимум 8 символа')
        .max(30, 'Максимум 30 символов'),
});

const AuthoriazationContainer = ({ className }) => {
    const {
        register,
        reset,
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

    const dispatch = useDispatch();

    const USER_ROLE = useSelector(selectUserRole);

    const store = useStore();

    useEffect(() => {
        let currentWasLogout = store.getState().app.wasLogout;
        const unsubscribe = store.subscribe(() => {
            let prevWasLogout = currentWasLogout;
            currentWasLogout = store.getState().app.wasLogout;

            if (currentWasLogout !== prevWasLogout) {
                reset();
            }
        });
        return unsubscribe;
    }, [reset, store]);

    const onSubmit = ({ login, password }) => {
        server.autorize(login, password).then(({ error, res }) => {
            if (error) {
                setServerError(`Ошибка запроса : ${error}`);
                return;
            }

            dispatch(setUser(res));
        });
    };

    const StyledLink = styled(Link)`
        margin-top: 20px;
        color: #030303;
        text-decoration: underline;
        font-size: 14px;
    `;

    const formError = errors?.login?.message || errors?.password?.message;
    const errorMessage = formError || serverError;
    const StyledErrorMessage = styled.div`
        color: #ff0000;
        font-size: 14px;
        margin-top: 10px;
    `;

    if (USER_ROLE !== ROLE.GUEST) {
        return <Navigate to="/" />;
    }

    return (
        <div className={className}>
            <H2>Авторизация</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="login"
                    {...register('login', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Input
                    type="password"
                    placeholder="password"
                    {...register('password', {
                        onChange: () => setServerError(null),
                    })}
                />
                <Button type="submit" disabled={!!formError} width="100px">
                    Войти
                </Button>
                {errorMessage && (
                    <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
                )}
                <StyledLink to="/register">Зарегистрироваться</StyledLink>
            </form>
        </div>
    );
};

export const Authorization = styled(AuthoriazationContainer)`
    height: 300px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    color: #000;
    & > form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
