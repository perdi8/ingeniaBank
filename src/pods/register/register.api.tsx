import { User } from "../../models/user/User.model";

export const RegisterApi = () => {
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
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw "Error en la llamada Ajax Register";
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return { registerUser };
};
