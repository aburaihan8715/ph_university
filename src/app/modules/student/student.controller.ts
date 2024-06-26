import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import AppError from '../../errors/AppError';

const getAStudent = catchAsync(async (req, res) => {
  const student = await studentService.getAStudentFromDB(req.params.id);
  if (!student) throw new AppError(httpStatus.NOT_FOUND, 'Student not found');

  //  send response to the client
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrieved successfully',
    data: student,
  });
});

const getAllStudent = catchAsync(async (req, res) => {
  const students = await studentService.getAllStudentFormDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students retrieved successfully',
    data: students,
  });
});

const updateAStudent = catchAsync(async (req, res) => {
  const updatedStudent = await studentService.updateAStudentIntoDB(
    req.params.id,
    req.body.student,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student updated successfully',
    data: updatedStudent,
  });
});

const deleteAStudent = catchAsync(async (req, res) => {
  await studentService.deleteAStudentFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully',
    data: null,
  });
});

export const studentController = {
  getAStudent,
  getAllStudent,
  updateAStudent,
  deleteAStudent,
};
