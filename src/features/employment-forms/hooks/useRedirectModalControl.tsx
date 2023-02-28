import * as React from 'react';
import { useRouter } from 'next/router';

export const useRedirectModalControl = (initialState = false) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = React.useState(initialState);
  const [message, setMessage] = React.useState('');
  const [isUserVerified, setIsUserVerified] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const openModal = (
    message: string,
    isUserVerified: boolean,
    phoneNumber: string,
  ) => {
    setIsModalOpen(true);
    setMessage(message);
    setIsUserVerified(isUserVerified);
    setPhoneNumber(phoneNumber);
  };

  const closeModal = () => setIsModalOpen(false);

  const redirect = () => {
    if (isUserVerified == true) {
      router.push(`/employment-forms/documents/${phoneNumber}`);
    } else if (isUserVerified == false) {
      router.push(`/employment-forms/applicant-details/${phoneNumber}`);
    }
  };

  return {
    message,
    isModalOpen,
    openModal,
    closeModal,
    redirect,
  };
};
