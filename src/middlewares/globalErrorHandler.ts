import { ErrorRequestHandler } from 'express';
import { TErrorSources } from '../interfaces/error';
import parameters from '../parameters';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // ser default error message values
  const statusCode = 500;
  const message = 'Global Error Occured!';
  const errorSources: TErrorSources = [
    {
      path: '',
      message: 'Find Error in Chaos!',
    },
  ];

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
