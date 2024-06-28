import { createContext } from 'react';
import { GlobalContextType } from './GlobalProvider';

const GlobalContext = createContext({} as GlobalContextType);

export default GlobalContext;
