const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});      

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

document.addEventListener('DOMContentLoaded', function() {
  const registroForm = document.getElementById('registroForm');
  const inicioSesionForm = document.getElementById('inicioSesionForm');
  const mensajeDiv = document.getElementById('mensaje');
  const registroDiv = document.getElementById('registro');
  const inicioSesionDiv = document.getElementById('inicioSesion');

  registroForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombreRegistro').value;
      mensajeDiv.textContent = `¡Bienvenido ${nombre}!`;
      registroDiv.classList.add('hidden');
      mensajeDiv.classList.remove('hidden');
      resetForm(registroForm); // Llamar a la función para reiniciar el formulario
  });

  inicioSesionForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('emailInicio').value;
      mensajeDiv.textContent = `¡Bienvenido nuevamente al inicio de sesión, ${email}!`;
      inicioSesionDiv.classList.add('hidden');
      mensajeDiv.classList.remove('hidden');
      resetForm(inicioSesionForm); // Llamar a la función para reiniciar el formulario
  });

  // Función para reiniciar el formulario
  function resetForm(form) {
    form.reset(); // Restablecer todos los campos del formulario
}
});

//Cree un evento que guarda la informacion ingresada en REGISTRO y la guarda en json, tomando el ID de los label.
const formElement = document.getElementById('registroForm'); 

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let nombreRegistro = document.getElementById("nombreRegistro").value;    
  let emailRegistro = document.getElementById("emailRegistro").value; 
  let contrasenaRegistro = document.getElementById("contrasenaRegistro").value; 
  let registroForm = { nombreRegistro : nombreRegistro, emailRegistro : emailRegistro, contrasenaRegistro : contrasenaRegistro};
  let registerJSON = JSON.stringify(registroForm);

  console.log(registerJSON);
})

//Cree un evento que guarda la informacion ingresada por INICIAR SESION y lo guarda en jsonm tomando el id de los label.
const inicioelement = document.getElementById('inicioSesionForm');

inicioelement.addEventListener("submit", (event) => {
    event.preventDefault();
    let nombreemailInicio = document.getElementById("emailInicio").value;
    let contrasenaInicio = document.getElementById("contrasenaInicio").value;
    let inicioForm = { nombreemailInicio : nombreemailInicio, contrasenaInicio : contrasenaInicio };
    let inicioJSON = JSON.stringify(inicioForm);

    console.log(inicioJSON); 
})



// const baseUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu backend Nest.js

// // Mostrar formulario de registro al hacer clic en "Registrarse"
// document.getElementById('sign-up').addEventListener('click', function() {
//     document.querySelector('.register').classList.add('hide');
//     document.querySelector('.login').classList.remove('hide');
//     document.getElementById('inicioSesion').classList.remove('hidden');
// });

// // Mostrar formulario de inicio de sesión al hacer clic en "Iniciar Sesión"
// document.getElementById('sign-in').addEventListener('click', function() {
//     document.querySelector('.login').classList.add('hide');
//     document.querySelector('.register').classList.remove('hide');
//     document.getElementById('registro').classList.remove('hidden');
// });

// // Manejar el formulario de registro
// document.getElementById('registroForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const nombre = document.getElementById('nombreRegistro').value;
//     const email = document.getElementById('emailRegistro').value;
//     const contrasena = document.getElementById('contrasenaRegistro').value;

//     fetch(`${baseUrl}/register`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ nombre, email, contrasena }),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         document.getElementById('mensaje').innerHTML = 'Registro exitoso';
//         console.log(data); // Manejar la respuesta del backend según sea necesario
//     })
//     .catch(error => {
//         console.error('Hubo un problema con la solicitud:', error);
//         document.getElementById('mensaje').innerHTML = 'Error en el registro';
//     });
// });

// // Manejar el formulario de inicio de sesión
// document.getElementById('inicioSesionForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const email = document.getElementById('emailInicio').value;
//     const contrasena = document.getElementById('contrasenaInicio').value;

//     fetch(`${baseUrl}/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, contrasena }),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         document.querySelector('.mensaje').innerHTML = 'Login exitoso';
//         console.log(data); // Manejar la respuesta del backend según sea necesario (guardar token, redireccionar, etc.)
//     })
//     .catch(error => {
//         console.error('Hubo un problema con la solicitud:', error);
//         document.querySelector('.mensaje').innerHTML = 'Error en el inicio de sesión';
//     });
// });