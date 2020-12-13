export const urlAPI = process.env.REACT_APP_CONFIG_URL_API;

export function fillObj(parent, obj) {
  for (let key of Object.keys(parent)) {
    if (obj[key]) {
      parent[key] = obj[key];
    }
  }
  return parent;
}

export function sumAllData(arrayOfObject, key = "") {
  return arrayOfObject.reduce((a, b) => a + (b[key] || 0), 0);
}

// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
};
