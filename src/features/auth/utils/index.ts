const TOKEN_STORAGE_PREFIX = 'LIBERTY_PAY_ADMIN_';

export const tokenStorage = {
  getToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`${TOKEN_STORAGE_PREFIX}TOKEN`) as string,
    );
  },

  setToken: (token: string) => {
    window.localStorage.setItem(
      `${TOKEN_STORAGE_PREFIX}TOKEN`,
      JSON.stringify(token),
    );
  },

  clearToken: () => {
    window.localStorage.removeItem(`${TOKEN_STORAGE_PREFIX}TOKEN`);
  },
};
