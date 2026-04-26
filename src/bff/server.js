import { getUser } from './getUsers';
import { createUser } from './create-user';
import { createSession } from './create-session';

export const server = {
  async autorize(authLogin, authPassword) {
    const user = await getUser(authLogin);
    if (!user) {
      return {
        error: 'Такой пользователь не найден',
        res: null,
      };
    }

    if (authPassword !== user.password) {
      return {
        error: 'Неверный пароль',
        res: null,
      };
    }

    return {
      error: null,
      res: createSession(user.role_id),
    };
  },
  async register(regLogin, regPassword) {
    const user = await getUser(regLogin);
    if (user) {
      return {
        error: 'Такой пользователь уже существует',
        res: null,
      };
    }

    await createUser(regLogin, regPassword);

    return {
      error: null,
      res: createSession(user.role_id),
    };
  },
};
