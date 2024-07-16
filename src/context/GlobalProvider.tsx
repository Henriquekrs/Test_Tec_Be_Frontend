import { useContext, useState } from 'react';
import GlobalContext from './GlobalState';
import { fetchEmployees } from '../FetchApi/Employees';
import { Employee, ProviderPropsType } from '../types/contextTypes';
import { FilterEmployees } from '../FetchApi/FilterEmployees';

const GlobalProvider = ({ children }: ProviderPropsType) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const getEmployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
  };

  const filterEmployees = async (params: string) => {
    const filter = await FilterEmployees(params);
    setEmployees(filter);
  };

  return (
    <GlobalContext.Provider
      value={{ employees, getEmployees, filterEmployees }}
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
