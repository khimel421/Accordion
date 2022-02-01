// const button = document.querySelector('.arrow');
// const qstn = document.querySelector('.question');
// const one = document.querySelector('.one');

// button.addEventListener('click' , () => {
//     const para = document.createElement('p');
//     para.textContent = 'work is done';
//     qstn.appendChild(para);
    
// })

// function para(){
//     const answer = document.createElement('p');
//     answer.textContent = 'chop shala';
//     qstn.appendChild(answer);
// }

// button.addEventListener('click' , para);

const btn = document.querySelectorAll('.btn');
const collapse = document.querySelectorAll('.collapse');
const content = document.querySelector('.content');
const main__box = document.querySelector('.main__box');
const main_img = document.querySelector('.main_img');


let papa = false;

var screen_width = window.matchMedia("(max-width: 425px)");


function newFunction(num){
    let para = collapse[num];
    if (papa === false){
        para.style.height = '50px';
        papa = true;
    }
    else{
        para.style.height = '0px';
        papa = false;
    }
}

for (i = 0; i < btn.length; i++){
    let num_btn = btn[i];
    let x = i;
    num_btn.addEventListener('click' , () => {
        newFunction(x); 
    });
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      main_img.src ='images/illustration-woman-online-mobile.svg';
    } else {
        main_img.src ='images/illustration-woman-online-desktop.svg';
    }
  }

myFunction(screen_width);

screen_width.addListener(myFunction);

