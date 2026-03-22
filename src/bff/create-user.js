export const createUser = (regLogin, regPassword) => {
  fetch('http://localhost:3009/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json/charset=UTF-8',
    },
    body: JSON.stringify({
      login: regLogin,
      password: regPassword,
      registered_at: new Date()
        .toISOString()
        .substring(0, 16)
        .replace('T', ' '),
      role_id: 2,
    }),
  });
};
