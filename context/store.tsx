"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";

type ContextProps = {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
};

const StoreContext = createContext<ContextProps>({
  state: null,
  setState: () => null,
});

export const useStore = () => useContext(StoreContext);

type Props = {
  children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
  const [state, setState] = useState("/");

  return (
    <StoreContext.Provider value={{ state, setState }}>
      {children}
    </StoreContext.Provider>
  );
};
