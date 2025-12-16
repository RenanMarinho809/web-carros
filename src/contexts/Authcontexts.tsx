import { type ReactNode, createContext, useContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

type AuthContextData = {
  signed: boolean;
};

interface UserProps {
  id: string;
  name: string | null;
  email: string | null;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);

  return (
    <AuthContext.Provider value={{ signed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
