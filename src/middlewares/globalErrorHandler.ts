import { ErrorRequestHandler } from 'express';
import { TErrorSources } from '../interfaces/error';
import parameters from '../parameters';
import { ZodError } from 'zod';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // ser default error message values
  let statusCode = 500;
  let message = 'Global Error Occured!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Find Error in Chaos!',
    },
  ];

  // handling throw condition
  if (err instanceof ZodError) {
    const errorObj = handleZodError(err);
    // assign zod error
    [statusCode, message, errorSources] = [
      errorObj.statusCode,
      errorObj.message,
      errorObj.errorSources,
    ];
  } else if (err?.name === 'ValidationError') {
    const errorObj = handleValidationError(err);
    // assign zod error
    [statusCode, message, errorSources] = [
      errorObj.statusCode,
      errorObj.message,
      errorObj.errorSources,
    ];
  }

  // return the result
  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: parameters.env === 'development' ? err?.stack : null,
  });
  next();
};

export default globalErrorHandler;
