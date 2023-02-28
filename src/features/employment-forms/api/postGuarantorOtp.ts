import { useMutation } from 'react-query';
import type { AxiosResponse } from 'axios';

import { employmentAxios } from '@/lib/axios';

interface PostGuarantorsOtpParameters {
  otpDto: { otp: string };
  phoneNumber: string;
}

const postGuarantorOtp = ({
  otpDto,
  phoneNumber,
}: PostGuarantorsOtpParameters): Promise<AxiosResponse> => {
  return employmentAxios.post(
    `/salesrep/verify_guarantor/${phoneNumber}/verify/`,
    otpDto,
  );
};

export const usePostGuarantorOtp = () => {
  return useMutation('postGuarantorOtp', postGuarantorOtp, {});
};
