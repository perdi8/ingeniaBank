import React, { useContext } from "react";
import {
  Context,
  MyContext,
} from "../../common-components/context-provider/dashboard.context";

export const useIsValidLogin = () => {
  const { setIsLogin, setUsername, setId } = useContext<Context>(MyContext);
  const [userLogin] = React.useState<boolean>(false);

  const loadUser = (user: any) => {
    const data = new FormData();
    data.append("email", user.email);
    data.append("password", user.password);

    fetch(`https://bethabank.herokuapp.com/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // eslint-disable-next-line no-throw-literal
          throw "Error en la llamada Ajax";
        }
      })

      .then((json) => [
        setIsLogin(true),
        setId(json.id),
        setUsername(`${json.name}  ${json.lastName}`),
      ])
      .catch(function (err) {
        setIsLogin(false);
        console.log(err);
      });
  };

  return { loadUser, userLogin };
};
