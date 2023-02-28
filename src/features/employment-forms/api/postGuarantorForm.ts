import { useMutation } from 'react-query';
import type { AxiosResponse } from 'axios';

import { employmentAxios } from '@/lib/axios';
import type { GuarantorFormDto } from '@/features/employment-forms';

interface ApplicationDetailsParameters {
  guarantorFormDto: GuarantorFormDto;
  phoneNumber: string;
}

const postGuarantorForm = ({
  guarantorFormDto,
  phoneNumber,
}: ApplicationDetailsParameters): Promise<AxiosResponse> => {
  return employmentAxios.post(
    `/salesrep/verify_guarantor/${phoneNumber}/`,
    guarantorFormDto,
  );
};

export const usePostGuarantorForm = () => {
  return useMutation('postGuarantorForm', postGuarantorForm, {});
};
