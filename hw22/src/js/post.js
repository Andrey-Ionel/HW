/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
export function post() {
  fetch('http://localhost:5555/user', {
    method: 'POST',
    body: {
      name: 'Vanya',
    },
  })
    .then((response) => response.json())
    .then((user) => {
      console.log('user', user);
    })
    .catch((error) => {
      console.log(error);
    });
}
