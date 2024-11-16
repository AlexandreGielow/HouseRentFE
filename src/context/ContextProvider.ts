import { createContext} from 'react';

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

export interface User {
    name: string;
    email: string;
    isLogged: boolean
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
});