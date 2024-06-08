type TErrorSources = {
  path: string | number;
  message: string;
}[];

interface TGenericErrorResponse {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
}

export { TGenericErrorResponse, TErrorSources };
