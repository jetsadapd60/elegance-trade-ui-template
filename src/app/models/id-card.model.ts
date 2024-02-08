import { MainResponse } from './main-response.model';

export interface IdCardResponse {
  status: string;
  error: any[];
  data: DataIdCard[];
  request_id: string;
  response_id: string;
}

export interface DataIdCard {
  id_number: Idnumber;
  title_name_surname_th: Idnumber;
  title_name_en: Idnumber;
  surname_en: Idnumber;
  dob_th: Idnumber;
  dob_en: Idnumber;
  religion: Idnumber;
  address_1: Idnumber;
  address_2: Idnumber;
  address_full: Idnumber;
  address_house_building_number: Idnumber;
  address_street_address: Idnumber;
  address_sub_district: Idnumber;
  address_district: Idnumber;
  address_province: Idnumber;
  address_postcode: Addresspostcode;
  doi_th: Idnumber;
  doi_en: Idnumber;
  doe_th: Idnumber;
  doe_en: Idnumber;
  title_th: Idnumber;
  name_th: Idnumber;
  surname_th: Idnumber;
  title_en: Idnumber;
  name_en: Idnumber;
  option: Option;
}

interface Option {
  face: Addresspostcode;
  gender: Addresspostcode;
  signed: Addresspostcode;
  processed_image: Addresspostcode;
}

interface Addresspostcode {
  value: string;
}

interface Idnumber {
  bboxes: number[][][];
  bboxes_norm: number[][][];
  value: string;
  confidence: number;
}

// -------------
export interface IdCardErrorResponse {
  status: string;
  request_id: string;
  error: IdCardError[];
  data?: any;
  response_id: string;
}

export interface IdCardError {
  object: string;
  code: string;
  message: string;
}

// -----------------
export interface IdCardData {
  prefix: string;
  firstName: string;
  lastName: string;
  idCard: string;
  birthDay: string;
  address: IdCardAddress[];
}

export interface IdCardAddress {
  no: string;
  moo: string;
  building: string;
  room: string;
  alley: string;
  road: string;
  province: string;
  district: string;
  subDistrict: string;
  postCode: string;
}

//-------------
export interface CompareFaceResponse extends MainResponse {
  data: DataCompareFace;
}

export interface DataCompareFace {
  request_id: string;
  confidence: number;
  thresholds: Thresholds;
  time_used: number;
  response_id: string;
  error_message: string;
}

interface Thresholds {
  err_01: number;
  err_001: number;
  err_0001: number;
}
