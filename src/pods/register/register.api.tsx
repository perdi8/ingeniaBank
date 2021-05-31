import React from "react";
import { ResponseUser } from "../../models/user/ResponseUser";
import { User } from "../../models/user/User.model";

export const RegisterApi = () => {
  const [responseApi, setResponseApi] = React.useState<ResponseUser>();

  const registerUser = (user: User) => {
    fetch(`https://bethabank.herokuapp.com/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        lastname: user.lastname,
        phone: user.phone,
        email: user.email,
        password: user.password,
        dni: user.dni,
        address: user.address,
        location: user.location,
        country: user.country,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          setResponseApi(await response.json());
          return;
        } else {
          // eslint-disable-next-line no-throw-literal
          throw "Error en la llamada Ajax Register";
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return { registerUser, responseApi };
};
