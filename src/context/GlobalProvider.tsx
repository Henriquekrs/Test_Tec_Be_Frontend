import { useContext, useState } from 'react';
import GlobalContext from './GlobalState';
import { fetchEmployees } from '../FetchApi/Employees';

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
  getEmployees: () => Promise<void>;
};

export type ProviderPropsType = {
  children: React.ReactNode;
};

const GlobalProvider = ({ children }: ProviderPropsType) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  console.log(employees, 'Provider');

  const getEmployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
  };

  return (
    <GlobalContext.Provider value={{ employees, getEmployees }}>
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
