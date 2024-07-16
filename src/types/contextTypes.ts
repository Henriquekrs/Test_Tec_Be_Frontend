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
  filterEmployees: (query: string) => void;
};

export type ProviderPropsType = {
  children: React.ReactNode;
};
