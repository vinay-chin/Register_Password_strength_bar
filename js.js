const pass_check = document.querySelector('.container');
const pass = document.querySelector('#password');
const bar = document.querySelector('.bar');
console.log('hi');
pass.onkeyup = () => {
  console.log("now ypu typed"+ pass.value);
  checkPassStrength(pass.value);
}
function checkPassStrength(pass) {
  let strength = 0;
  if(pass.match(/(?=.*[A-Z])/)) strength++;
  if(pass.match(/(?=.*[a-z])/)) strength++;
  if(pass.match(/(?=.*[0-9])/)) strength++;
  if(pass.match(/(?=.*[~!@#$%^&*])/)) strength++;
  if(pass.match(/(?=.{8,})/)) strength++;
  console.log(strength);
  switch(strength) {
    case 1:
        bar.style.cssText = `width : ${(strength/5)*100}%; background-color : lightred;`;
        break;
    case 2:
        bar.style.cssText = `width : ${(strength/5)*100}%; background-color : orange;`;
        break;
    case 3:
        bar.style.cssText = `width : ${(strength/5)*100}%; background-color : lightblue;`;
        break;  
    case 4:
        bar.style.cssText = `width : ${(strength/5)*100}%; background-color : gold;`;
        break;   
    case 5:
        bar.style.cssText = `width : ${(strength/5)*100}%; background-color : lightgreen;`;
        break;             
  }
}
