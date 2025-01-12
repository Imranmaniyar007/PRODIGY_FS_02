// src/app/models/employee.model.ts
export interface Employee {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  position?: string;
  department?: string;
  dateOfBirth?: string;
  dateOfHire?: string;
  salary?: number;
}
