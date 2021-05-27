import { User } from "../../models/user/User.model";

export const RegisterApi = () => {
  const registerUser = (user: User) => {
    fetch(`http://localhost:8080/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        lastname: user.lastname,
        phone: user.phone,
        email: user.email,
        password: user.password,
        DNI: user.DNI,
        address: user.address,
        location: user.location,
        country: user.country,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw "Error en la llamada Ajax";
        }
        //response.json();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return { registerUser };
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
