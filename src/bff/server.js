import { getUser } from './getUsers';
import { addUser } from './add-user';
import { sessions } from './sessions';

export const server = {
  async logout(session) {
    sessions.remove(session);
  },
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
      res: {
        session: sessions.create(user),
        login: user.login,
        id: user.id,
        roleId: user.role_id,
      },
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

    await addUser(regLogin, regPassword);

    return {
      error: null,
      res: {
        session: sessions.create(user),
        login: user.login,
        id: user.id,
        roleId: user.role_id,
      },
    };
  },
};
