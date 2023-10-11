import { FC, useState, useContext, createContext } from "react";

type AuthType = Record<string, boolean>;
type ContextType = [AuthType, React.Dispatch<React.SetStateAction<AuthType>>];

interface ProviderProps {
  value: AuthType;
  children: any;
}

interface InjectProps {
  auth: ContextType[0];
  setAuth: ContextType[1];
}

const Context = createContext<any>(null);


const Provider: FC<ProviderProps> = ({ value = {}, children }: any) => {
  const [state, setState] = useState<AuthType>(value);
  const updateState: InjectProps["setAuth"] = (newState = {}) => {
    setState({
      // ...state, // 去掉防止不能重新设置
      ...newState,
    });
  };
  return <Context.Provider value={[state, updateState]}>{children}</Context.Provider>;
};

const useAuth = (): ContextType => {
  const value = useContext(Context);
  return value;
};
export { useAuth, Provider };

export default useAuth;