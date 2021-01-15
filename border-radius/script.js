let borderContainer = document.querySelector('div.border-container');
let showResult = document.querySelector('.show-result');
let borderLeft = document.querySelector('div.border-left');
let rangeLeft = document.querySelector('div.border-left input');
let rangeTop = document.querySelector('div.border-top input');
let rangeRight = document.querySelector('div.border-right input');
let rangeBottom = document.querySelector('div.border-bottom input');

borderContainer.style.border = "thick solid #0000FF";
borderContainer.style.backgroundColor = "#FF00FF";
borderContainer.style.borderRadius = "10px";

window.onload = function() {
  updateResult();
};

rangeLeft.oninput = function(){
  borderContainer.style.borderBottomLeftRadius = `${this.value}%`;
  updateResult();
}


rangeTop.oninput = function (){
  borderContainer.style.borderTopLeftRadius = `${this.value}%`;
  updateResult();
}

rangeRight.oninput = function (){
  borderContainer.style.borderTopRightRadius = `${this.value}%`;
  updateResult();
}

rangeBottom.oninput = function (){
  borderContainer.style.borderBottomRightRadius = `${this.value}%`;
  updateResult();
}

function updateResult(){
  showResult.innerHTML = 
    "Resultado: " + 
    "Left:" + borderContainer.style.borderBottomLeftRadius + " / " + 
    "Top:" + borderContainer.style.borderTopLeftRadius + " / " +
    "Right:" + borderContainer.style.borderTopRightRadius + " / " + 
    "Bottom:" + borderContainer.style.borderBottomRightRadius;
}


let inputsRatio = {
  $top: document.querySelector('div.border-top input'),
  $left: document.querySelector('div.border-left input'),
  $right: document.querySelector('div.border-right input'),
  $bottom: document.querySelector('div.border-bottom input'),
  $all: document.querySelector('div.border-all input')
}

function changeBorderRadius(input, border){
  input.oninput = function(){
    borderContainer.style[border] = `${this.value}%`;
  }

  updateResult();
}