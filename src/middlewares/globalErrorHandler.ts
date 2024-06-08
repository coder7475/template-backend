import { ErrorRequestHandler } from 'express';
import { TErrorSources } from '../interfaces/error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Global Error Occured!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Find Error in Chaos!',
    },
  ];
};
