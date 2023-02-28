import Axios from 'axios';
import type { AxiosInstance } from 'axios';

const EMPLOYMENT_API_BASE_URL = process.env.NEXT_PUBLIC_EMPLOYMENT_API_BASE_URL as string;
const ADMIN_API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API_BASE_URL as string;
// console.log({EMPLOYMENT_API_BASE_URL})
export const employmentAxios = Axios.create({
  baseURL: EMPLOYMENT_API_BASE_URL,
});

export const adminAxios = Axios.create({
  baseURL: ADMIN_API_BASE_URL,
});

export const setAxiosDefaultToken = (
  token: string,
  axiosInstance: AxiosInstance,
) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteAxiosDefaultToken = () => {
  delete adminAxios.defaults.headers.common['Authorization'];
};
