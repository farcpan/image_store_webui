const idTokenKey = "GOOGLE_ID_TOKEN";

export const saveIdToken = (idToken: string) => {
  localStorage.setItem(idTokenKey, idToken);
};
export const getIdToken = (): string | null => {
  const t = localStorage.getItem(idTokenKey);
  if (!t) {
    return null;
  }
  return t;
};
export const removeIdToken = () => {
  localStorage.removeItem(idTokenKey);
};
