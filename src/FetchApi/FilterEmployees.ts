import { Employee } from '../types/contextTypes';
import { fetchEmployees } from './Employees';

export async function FilterEmployees(params: string) {
  const data = await fetchEmployees();
  const filteredData = data.filter((employee: Employee) => {
    return (
      employee.name.toLowerCase().includes(params.toLowerCase()) ||
      employee.job.toLowerCase().includes(params.toLowerCase()) ||
      employee.phone.toLowerCase().includes(params.toLowerCase())
    );
  });
  return filteredData;
}
