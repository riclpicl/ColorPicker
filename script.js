let colorInput = document.querySelector('#colorPicker');
let hexInput = document.querySelector('#userInput');

colorInput.addEventListener('input', () =>{
  let color = colorInput.value;
  userInput.value = color;
 //document.body.style.backgroundColor = color;
});