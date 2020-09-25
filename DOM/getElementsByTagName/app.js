//To select all li's
document.getElementsByTagName('li');

// To select all h1's (there's only one on this page):
document.getElementsByTagName('h1');

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName('input'); //get all inputs
inputs[0]; //this works
// inputs.pop() //DOES NOT WORK! pop() is an array method, and this isn't an array!

// TRANG PRACTICE

const img = document.querySelector("#bear-photo");
img.src = "https://images.unsplash.com/photo-1553425300-8bd56360f8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1439&q=80";

const ul = document.getElementsByTagName("ul")[0];
const li = ul.getElementsByClassName("special");
li[0].textContent = "Hi, this is Trang";
li[1].style.color = "red";

const anotherLi = document.querySelector('ul li#firstLi');
anotherLi.style.color = "blue";

var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = output + entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);

const btn = document.querySelector('button');

btn.addEventListener('mouseover', function(){
    btn.innerText = "Dont hover me";
})
btn.addEventListener("mouseout", function(){
    btn.innerText = "Thanks";
})



