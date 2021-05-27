import React from "react";

interface Context {
  username: string;
  setUsername: (value: string) => void;
}
export const MyContext = React.createContext<Context>({
  username: "",
  setUsername: (value: string) => {},
});

export const MyContextProvider: React.FC = (props) => {
  const [username, setUsername] = React.useState("Inma");

  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {props.children}
    </MyContext.Provider>
  );
};
