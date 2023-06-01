import { AxiosError } from 'axios';

export type ApiResponseError = AxiosError<{
  statusCode: number;
  message: string | string[];
  error?: string;
  redirectURL?: string;
}>;
