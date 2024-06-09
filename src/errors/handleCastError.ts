import mongoose from 'mongoose';
import { TErrorSources, IGenericErrorResponse } from './../interfaces/error';
import httpStatus from 'http-status';

const handleCastError = (
  err: mongoose.Error.CastError,
): IGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Cast Error: Invalid ID',
    errorSources,
  };
};

export default handleCastError;
