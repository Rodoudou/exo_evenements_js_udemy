const body = document.body;
let button = document.createElement("button");
button.textContent = "Afficher le message !";
let div = document.createElement("div");
body.append(div);
div.append(button);

// let para = document.createElement("p");
// para.textContent = "meeeerde !";

let hidden = true;

const start = () => {
  if (hidden) {
    let para = document.createElement("p");
    para.textContent = "meeeerde !";
    div.append(para);
    button.textContent = "Cacher le message !";
    hidden = false;
  } else {
    document.querySelector("p").remove();
    button.textContent = "Afficher le message !";
    hidden = true;
  }
};

const buttonOnclick = () => button.addEventListener("click", start);

buttonOnclick();
