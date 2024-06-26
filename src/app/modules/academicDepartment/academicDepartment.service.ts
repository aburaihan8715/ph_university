import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAAcademicDepartmentIntoDB = async (
  payload: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find({}).populate('academicFaculty');
  return result;
};

const getAAcademicDepartmentFromDB = async (id: string) => {
  const result =
    await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};

const updateAAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentServices = {
  createAAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getAAcademicDepartmentFromDB,
  updateAAcademicDepartmentIntoDB,
};
