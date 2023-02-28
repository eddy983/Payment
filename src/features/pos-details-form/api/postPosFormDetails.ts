import { useMutation, useQueryClient } from 'react-query';
import type { AxiosResponse } from 'axios';

import { employmentAxios } from '@/lib/axios';
import type { ApplicationFormDto } from '@/features/employment-forms';

const postPosApplicationForm = (
  applicationFormDto: ApplicationFormDto,
): Promise<AxiosResponse> => {
  return employmentAxios.post(
    'https://libertypay.live/salesrep/agent_onboard/',
    applicationFormDto,
  );
};

export const usePostPosApplicationForm = () => {
  const queryClient = useQueryClient();
  
  return useMutation('postPosApplicationForm', postPosApplicationForm, {
    onSuccess: () => {
      queryClient.invalidateQueries('notifications-data');
    },
  });

};
