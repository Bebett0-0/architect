export const getUsers = () =>
  fetch('http://localhost:4000/users').then((response) => response.json());

export const getUser = async (login) => {
  const users = await getUsers();
  return users.find((user) => user.login === login);
};
