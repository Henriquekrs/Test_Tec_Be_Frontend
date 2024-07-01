import { createContext } from 'react';
import { GlobalContextType } from '../types/contextTypes';

const GlobalContext = createContext({} as GlobalContextType);

export default GlobalContext;
