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

// document.addEventListener('DOMContentLoaded', function() {
//   const registroForm = document.getElementById('registroForm');
//   const inicioSesionForm = document.getElementById('inicioSesionForm');
//   const mensajeDiv = document.getElementById('mensaje');
//   const registroDiv = document.getElementById('registro');
//   const inicioSesionDiv = document.getElementById('inicioSesion');

//   registroForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const nombre = document.getElementById('nombreRegistro').value;
//       mensajeDiv.textContent = `¡Registro exitoso, bienvenido ${nombre}!`;
//       registroDiv.classList.add('hidden');
//       mensajeDiv.classList.remove('hidden');
//       resetForm(registroForm); // Llamar a la función para reiniciar el formulario
//   });

//   inicioSesionForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const email = document.getElementById('emailInicio').value;
//       mensajeDiv.textContent = `¡Bienvenido nuevamente al inicio de sesión, ${email}!`;
//       inicioSesionDiv.classList.add('hidden');
//       mensajeDiv.classList.remove('hidden');
//       resetForm(inicioSesionForm); // Llamar a la función para reiniciar el formulario
//   });

//   // Función para reiniciar el formulario
//   function resetForm(form) {
//       form.reset(); // Restablecer todos los campos del formulario
//   }
// });

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