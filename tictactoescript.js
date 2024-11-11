let oddeven = 0;  
let putchar = '𝗫'; 

const buttons = document.querySelectorAll('.cell');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      
      if (oddeven < 9) {
        if (oddeven % 2 === 0) {
          putchar = '𝗫';
          button.style.textShadow = '0px 0px 8px #1565c0, 0px 0px 8px #1565c0,0px 0px 8px #1565c0,0px 0px 8px #1565c0,0px 0px 8px #1565c0';
        }
        else {
          putchar = '𝗢';  
          button.style.textShadow = '0 0 7px red, 0 0 7px red, 0 0 7px red';  
       
           }
        button.textContent = putchar;
        oddeven++;  
      }
    });
  });


function reset() {
  oddeven=0;
  const buttons = document .querySelectorAll('.cell');
  buttons.forEach(button => { button.innerHTML = '';});
  
  document.getElementById("result-p")
  .innerHTML=''
}
function result(){
  document.getElementById("result-p")
  .innerHTML="Andha hai kya BKL!"
}