import React from "react";

interface Context {
  username: string;
  isLogin: boolean;
  id: number;
  setUsername: (value: string) => void;
  setIsLogin: (value: boolean) => void;
  setId: (value: number) => void;
}
export const MyContext = React.createContext<Context>({
  isLogin: false,
  username: "",
  id: 0,
  setUsername: (value: string) => {},
  setIsLogin: (value: boolean) => console.log("Missing context provider"),
  setId: (value: number) => {},
});

export const MyContextProvider: React.FC = (props) => {
  const [username, setUsername] = React.useState("Inma");
  const [isLogin, setIsLogin] = React.useState(false);
  const [id, setId] = React.useState(0);

  return (
    <MyContext.Provider
      value={{ username, setUsername, isLogin, setIsLogin, id, setId }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
