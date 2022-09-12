export const getLocalStorage = (variableSession) => {
  return localStorage.getItem(variableSession);
}

export const setLocalStorage = ( variableSession, valueSession ) => {
  localStorage.setItem( variableSession, valueSession);
}