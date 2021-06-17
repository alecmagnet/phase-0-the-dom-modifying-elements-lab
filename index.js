// Write your code here!
document.body.removeChild(main);
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.setAttribute('id', "victory");
newHeader.textContent = "Alec is the champion";