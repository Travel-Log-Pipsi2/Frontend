export const getLSItem = (key: string) => {
  const value: string | null = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const setLSItem = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLSItem = (key: string) => {
  localStorage.removeItem(key);
};
