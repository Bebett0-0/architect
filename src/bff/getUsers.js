export const getUsers = () =>
  fetch('http://localhost:4000/users').then((response) => response.json());
