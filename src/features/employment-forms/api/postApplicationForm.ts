import { useMutation } from 'react-query';
import type { AxiosResponse } from 'axios';

import { employmentAxios } from '@/lib/axios';
import type { ApplicationFormDto } from '@/features/employment-forms';

const postApplicationForm = (
  applicationFormDto: ApplicationFormDto,
): Promise<AxiosResponse> => {
  return employmentAxios.post(
    'https://libertypay.live/salesrep/application_form/',
    applicationFormDto,
  );
};

export const usePostApplicationForm = () => {
  return useMutation('postApplicationForm', postApplicationForm, {});
};
