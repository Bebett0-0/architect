export const getUsers = () =>
  fetch('http://localhost:3009/users').then((response) => response.json());
