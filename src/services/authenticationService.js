

export const profilUserService = (request) => {
  const PROFIL_API_ENDPOINT = 'http://localhost:3001/api/v1/user/profil';
  
  const parameters = {
    method: 'POST',
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      // Authorization: getToken()
    },
    body: JSON.stringify(request.user)
  };

  return fetch(PROFIL_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'http://localhost:3001/api/v1/user/login';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };
  
  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      
      // localStorage.setItem('user', JSON.stringify(response['user']));
      return response.json();
    })
    .then(json => {
      return json;
    });
};

