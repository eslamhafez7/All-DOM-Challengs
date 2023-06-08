/*
Challeng 1
    - select the following element using 15 different ways
    - <div id="elzero" class="element" name="js">JavaScript</div> 
*/


let s1 = document.getElementsByTagName("div");
let s2 = document.getElementById("elzero");
let s3 = document.getElementsByClassName("element");
let s4 = document.querySelector("[name = js]");
let s5 = document.querySelector("#elzero");
let s6 = document.querySelector(".element");
let s7 = document.querySelector("div");
let s8 = document.getElementsByTagName("div"[0]);
let s9 = document.querySelectorAll("div#elzero");
let s10 = document.querySelectorAll("div.element");
let s11 = document.querySelectorAll("div [name = js]");
let s12 = document.querySelectorAll("div[name]");
let s13 = document.getElementsByClassName(".element [0]");
let s14 = document.querySelector('#elzero.element');
var elements = document.querySelectorAll('#elzero.element');
var s15 = elements[0];
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);
console.log(s7);
console.log(s8);
console.log(s9);
console.log(s10);
console.log(s11);
console.log(s12);
console.log(s13);
console.log(s14);
console.log(s15);
//DONE

/*
Challeng 2
    1- change src attr to https://elzero.org/wp-content/themes/elzero/imgs/logo.png
    2- change alt attr to  Elzero Logo
    3- do it using loop don't repeat yourself
*/
for(let i = 0; i < 10; i++) {
    let imgs = document.querySelectorAll("img");
    imgs[i].setAttribute("alt", "Elzero Logo");
    imgs[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    imgs[i].style = "background-color: blue; margin-bottom: 15px";
};
//DONE


/*
Challeng 3
    - Repeat the following code 10 times
    <div>
        <img decoding="async" src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png" alt="Elzero Logo">
    </div>
*/
for(let i = 0; i < 10; i++) {
    let img = document.querySelector("[decoding = async]");
    console.log(img);
}
//DONE

/*
Challeng 4
    doller = 15.6
*/
let input = document.querySelector("input");
let result = document.querySelector(".result");

input.oninput = function() {
    result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`;
}



/*
Challeng 5
    - change attributes of each one to another
    - don't use true or false
    - don't use any string
    - add 2 beside two
    <div class="one" title="two">Two</div>
    <div class="two" title="one">One</div>
*/

let ele1 = document.getElementsByClassName("one")[0];
let ele2 = document.getElementsByClassName("two")[0];

ele1.title = ele1.className;
ele2.title = ele2.className;
ele1.textContent = `${ele1.className}`;
ele2.textContent = `${ele2.className} ${ele2.attributes.length}`;
//DONE

// ele1.setAttribute("title", "one");
// ele1.textContent = "One";
// ele2.setAttribute("title", "two");
// ele2.textContent = "Two 2"

/*
Challenge 6
*/
let altImg = document.querySelectorAll("[decoding = asyncs]")
console.log(altImg);

for(let i = 0; i < altImg.length; i++) {
    if(altImg[i].hasAttribute("alt")) {
        altImg[i].setAttribute("alt", "Old")
    }else {
        altImg[i].setAttribute("alt", "Elzero New")
    };
};


/*
Challenge 7  
    Create Elements Using Form
*/
// let form = document.querySelector(".last-form");
// let elnm = document.getElementsByName("elements")[0];
// let type = document.querySelector("select");
// let text = document.getElementsByName("texts")[0];
// let results = document.querySelector(".results");


// form.onsubmit = function(e) {
//     e.preventDefault();
//     document.querySelector(".box").forEach(e => e.remove());

//     for(let i = 1; i <= elnm.value; i++) {
//         let myel = document.createElement(type.value);
//         let mytxt = document.createTextNode(text.value);

//         myel.className = "box";
//         myel.title = "Element";
//         myel.id = `id-${i}`;

//         myel.appendChild(mytxt);
//         results.appendChild(myel);
//     };
// };

// let Finput = document.querySelectorAll(".last-form input");

// submit = document.querySelector(".last-form input[type  =submit]");
// let box = document.querySelectorAll(".box");

// for (let i = 0; i < Finput.length; i++) {
//     Finput[i].style.display = "block";
//     Finput[i].style.boxSizing = "border-box";
//     Finput[i].style.width = "200px";
//     Finput[i].style.padding = "10px";
//     Finput[i].style.margin = "15px auto";
//     Finput[i].style.borderRadius = ".5rem";
//     Finput[i].style.border = "1px solid black";
// }

let form = document.querySelector(".last-form");
let elnm = document.getElementsByName("elements")[0];
let type = document.querySelector("select[name='type']");
let text = document.getElementsByName("texts")[0];
let results = document.querySelector(".results");

form.onsubmit = function(e) {
  e.preventDefault();
  document.querySelectorAll(".box").forEach(e => e.remove());

  for (let i = 1; i <= elnm.value; i++) {
    let myel = document.createElement(type.value);
    let mytxt = document.createTextNode(text.value);

    myel.className = "box";
    myel.title = "Element";
    myel.id = `id-${i}`;

    myel.appendChild(mytxt);
    results.appendChild(myel);
  }
};

let Finput = document.querySelectorAll(".last-form input");
let submit = document.querySelector(".last-form input[type='submit']");
let boxes = document.querySelectorAll(".box");

for (let i = 0; i < Finput.length; i++) {
  Finput[i].style.display = "block";
  Finput[i].style.boxSizing = "border-box";
  Finput[i].style.width = "200px";
  Finput[i].style.padding = "10px";
  Finput[i].style.margin = "15px auto";
  Finput[i].style.borderRadius = ".5rem";
  Finput[i].style.border = "1px solid black";
}


