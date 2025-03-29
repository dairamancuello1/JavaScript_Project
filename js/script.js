const userName = ['a', 'b', 'c'];

const userNameInput = prompt('Ingrese su nombre de usuario'); 

function verifyUserNameExist(userNameInput) {
  let userNameExist = false;

  for (let i = 0; i < userName.length; i++) {
    if (userNameInput === userName[i]) {
      userNameExist = true;
      break;
    }
  }
  
  return userNameExist;
};

console.log (verifyUserNameExist (userNameInput));

function addNewUser (userNameInput = '') {
  userName.push(userNameInput)
};
console.log (userNameInput);

if ( userNameInput && !verifyUserNameExist(userNameInput) ) {
  if (confirm('El usuario no existe.\nDesea crearlo?')) {
    addNewUser(userNameInput);
    alert('Usuario creado.');
  }
}