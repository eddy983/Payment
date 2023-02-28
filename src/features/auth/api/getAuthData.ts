import { useQuery } from 'react-query';

import { adminAxios } from '@/lib/axios';
import type { AuthData } from '@/features/auth';

export const getAuthData = async (): Promise<AuthData> => {
  const { data } = await adminAxios.get('http://localhost:3008/authData/');
  return data;
};

export const useAuthData = () => useQuery('auth-data', getAuthData);
