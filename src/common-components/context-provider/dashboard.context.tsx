import React from "react";

interface FilterContext {
  valueContext: string;
  setValueContext: (value: string) => void;
}

export const MyContext = React.createContext<FilterContext>({
  valueContext: "",
  setValueContext: (value) => console.log("My Context missing provider"),
});

export const MyContextProvider: React.FC = (props) => {
  const { children } = props;
  const [valueContext, setValueContext] = React.useState("");

  return (
    <MyContext.Provider value={{ valueContext, setValueContext }}>
      {children}
    </MyContext.Provider>
  );
};
