export type ApplicationFormDto = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  city: string;
  state: string;
  address_1: string;
  address_2: string;
  lga: string;
  postal_zipcode: string;
  next_of_kin_firstname: string;
  next_of_kin_lastname: string;
  next_of_kin_relationship: string;
  next_of_kin_phone_number: string;
  next_of_kin_address: string;
  above_eighteen: boolean;
  pos_type: string;
  pick_up_option: string;
  pickup_address: string;
  bvn_number: string;
  products_payload: ProductsPayload | undefined;
};

export interface ProductsPayload {
  [key: string]: POSDetails;
}
export interface POSDetails {
  quantity: number;
  pos_type: string;
}

export type ApplicantDetailsDto = {
  bvn_number: string;
  guarantor_first_name: string;
  guarantor_last_name: string;
  guarantor_email: string;
  guarantor_phone_number: string;
  document_type: string;
  nin_number: string;
};

export type GuarantorFormDto = {
  guarantor_bvn_number: string;
  guarantor_address: string;
  guarantor_city: string;
  guarantor_state: string;
  guarantor_postal_zipcode: string;
  guarantor_first_name: string;
  guarantor_last_name: string;
};
