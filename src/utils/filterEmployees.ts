import { Employee } from '../types/contextTypes';

export function filterEmployees(employees: Employee[], search: string) {
  return employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.job.toLowerCase().includes(search.toLowerCase()) ||
      employee.phone.toLowerCase().includes(search.toLowerCase())
  );
}
