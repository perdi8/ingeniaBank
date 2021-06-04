import React, { useState } from "react";
export interface Context {
  isRegister: boolean;
  username: string;
  isLogin: boolean;
  id: number;
  setIsRegister: (value: boolean) => void;
  setUsername: (value: string) => void;
  setIsLogin: (value: boolean) => void;
  setId: (value: number) => void;
}
export const MyContext = React.createContext<Context>({
  isRegister: false,
  isLogin: false,
  username: "",
  id: 0,
  setIsRegister: (value: boolean) => {},
  setUsername: (value: string) => {},
  setIsLogin: (value: boolean) => console.log("Missing context provider"),
  setId: (value: number) => {},
});

export const MyContextProvider: React.FC = (props) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [id, setId] = useState(0);

  return (
    <MyContext.Provider
      value={{
        username,
        setUsername,
        isLogin,
        setIsLogin,
        id,
        setId,
        isRegister,
        setIsRegister,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
