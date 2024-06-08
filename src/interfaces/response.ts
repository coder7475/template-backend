interface interfaceTResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
}

export default interfaceTResponse;
