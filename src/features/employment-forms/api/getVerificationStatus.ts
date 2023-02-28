import { useQuery } from 'react-query';

import { employmentAxios } from '@/lib/axios';

interface VerificationStatus {
  user_verified: boolean;
}

export const getVerificationStatus = async (
  phoneNumber: string,
): Promise<VerificationStatus> => {
  const { data } = await employmentAxios.get(
    `/salesrep/applicant_verified/${phoneNumber}`,
  );
  return data;
};

export const useVerificationStatus = (phoneNumber: string) =>
  useQuery(
    ['auth-data', phoneNumber],
    () => getVerificationStatus(phoneNumber),
    {
      enabled: !!phoneNumber,
      cacheTime: 0,
      refetchOnWindowFocus: 'always',
    },
  );
