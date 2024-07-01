import { useContext, useState } from 'react';
import GlobalContext from './GlobalState';
import { fetchEmployees } from '../FetchApi/Employees';
import { filterEmployees } from '../utils/filterEmployees';

export type Employee = {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

export type GlobalContextType = {
  employees: Employee[];
  filteredEmployees: Employee[];
  getEmployees: () => Promise<void>;
  searchEmployees: (query: string) => void;
};

export type ProviderPropsType = {
  children: React.ReactNode;
};

const GlobalProvider = ({ children }: ProviderPropsType) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  const getEmployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
    setFilteredEmployees(data); // Initially, show all employees
  };

  const searchEmployees = (query: string) => {
    if (!query) {
      setFilteredEmployees(employees);
    } else {
      const filtered = filterEmployees(employees, query);
      setFilteredEmployees(filtered);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ employees, filteredEmployees, getEmployees, searchEmployees }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export { GlobalProvider, useGlobalContext };
