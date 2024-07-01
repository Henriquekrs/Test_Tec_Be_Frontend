import { useContext, useState } from 'react';
import GlobalContext from './GlobalState';
import { fetchEmployees } from '../FetchApi/Employees';
import { filterEmployees } from '../utils/filterEmployees';
import { Employee, ProviderPropsType } from '../types/contextTypes';

const GlobalProvider = ({ children }: ProviderPropsType) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  const getEmployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
    setFilteredEmployees(data);
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
