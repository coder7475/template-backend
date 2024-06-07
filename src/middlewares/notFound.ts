import { Request, Response } from 'express';
import sendResponse from '../utils/sendResponse';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response) => {
  return sendResponse(res, {
    statusCode: httpStatus.NOT_FOUND,
    success: false,
    message: 'NOT FOUND',
    data: null,
  });
};

export default notFound;
