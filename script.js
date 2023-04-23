// Etape 2
let button = document.querySelector("button");
let para = document.createElement("p");
let secondes = 10;
let interval;
para.textContent = secondes;
document.querySelector("div").append(para);

//Etape 5
const decompte = () => {
    secondes--;
  if(secondes == 0) {
    stop();
  }
  else {
    para.textContent = secondes;
  }
  };

// Etape 4
const start = () => {
   interval = setInterval(decompte, 1000);
};

// Etape 3
const buttonOnclick = () => button.addEventListener("click", start);

buttonOnclick();

// Etape 6
const stop=()=>{
    clearInterval(interval);
    para.textContent = "Stop !";
}