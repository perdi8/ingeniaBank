import React from "react";
import { MyContext } from "../../common-components/context-provider/dashboard.context";

export const IsValidLogin = () => {
  const { setIsLogin, setUsername, setId } = React.useContext(MyContext);
  const [userLogin, setUserLogin] = React.useState(false);

  const loadUser = (user: any) => {
    const data = new FormData();
    data.append("email", user.email);
    data.append("password", user.password);

    fetch(`http://localhost:8080/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password }),
    })
      .then((response) => response.json())
      .then((json) => [setIsLogin(true), setId(json.id), console.log(json)]);
  };

  return { loadUser, userLogin };
};

/*
const requestOptions = {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ title: 'React POST Request Example' })
};
fetch('https://reqres.in/api/posts', requestOptions)
   .then(response => response.json())
   .then(data => this.setState({ postId: data.id }));
*/

/*export const isValidLogin = (email, password) =>
  new Promise((resolve) => {
    console.log(email, password);
    resolve(email === "email@email.com" && password === "test");
  });
*/

/*
fetch('../post.php', {
   method: 'POST',
   body: data
})
.then(function(response) {
   if(response.ok) {
       return response.text()
   } else {
       throw "Error en la llamada Ajax";
   }

})
.then(function(texto) {
   console.log(texto);
})
.catch(function(err) {
   console.log(err);
});
*/
