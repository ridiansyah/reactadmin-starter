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
