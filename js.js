const pass_check = document.querySelector('.container');
const pass = document.querySelector('#password');
const bar = document.querySelector('.bar');
console.log('hi');
pass.onkeyup = () => {
  console.log("now ypu typed"+ pass.value);
  checkPassStrength(pass.value);
}