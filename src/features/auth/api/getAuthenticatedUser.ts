import { useQuery } from 'react-query';

import type { User } from '@/features/auth';
import { adminAxios } from '@/lib/axios';

export const getAuthenticatedUser = async (): Promise<User> => {
  const { data } = await adminAxios.get('/agency/user/get_user_details/');
  return data;
};

export const useUser = () =>
  useQuery('user-details', getAuthenticatedUser, { cacheTime: 1000 * 60 * 5 });
