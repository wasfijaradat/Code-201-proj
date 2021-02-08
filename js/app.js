'use strict'
let userInput1 = prompt('Are you a degree holder?');
userInput1 = userInput1.toLowerCase(); //to validate the uppercase entry 
if (userInput1 === 'y' || userInput1 === 'yes') /*the user entry is true*/ {

    alert('that is great basically');
}
else if (userInput1 === 'no' || userInput1 === 'no') /*the user entry is flase*/ {

    alert('Unfortunately, you need to be a degree holder');
}

else /*the user entry doesnt match*/ {
    alert('incorrect entry');
}
console.log(userInput1);

let userInput2 = prompt('Would you love to learn programming?');
userInput2 = userInput2.toLowerCase();
if (userInput2 === 'y' || userInput2 === 'yes') {
    alert('Wonderful');
}
else if (userInput2 === 'n' || userInput2 === 'no') {

    alert('Think about it from now onward');
}
else {
    alert('incorrect entry');
}
// console.log(userInput2); 

let userInput3 = prompt('Do you mind contacting you via email?');
userInput3 = userInput3.toLowerCase();

if (userInput3 === 'y' || userInput3 === 'yes') {
    alert('No problem, will reach you out via phone calls');
}
else if (userInput3 === 'no' || userInput3 === 'no') {
    alert('check your mail inbox to verify');
}
else {
    alert('incorrect entry');
}
// console.log(userInput3); 

let userInput4 = prompt('Do you have a laptop?');
userInput4 = userInput4.toLowerCase();

if (userInput4 === 'y' || userInput4 === 'yes') {
    alert('That will help much');
}
else if (userInput4 === 'n' || userInput4 === 'no') {
    alert('get ready, have a laptop please');
}
else {
    alert('incorrect entry');
}
// console.log(userInput4); 

let userInput5 = prompt('Are you ready to join immediately?')
userInput5 = userInput5.toLocaleLowerCase();
if (userInput5 === 'y' || userInput5 === 'yes') {
    alert('Weclome onboard');
}
else if (userInput5 === 'n' || userInput5 === 'no') {
    alert('take a tour in our site, will help to excite you for the course');
}
else {
    alert('incorrect entry');
}

// console.log(userInput5); 

let userInput6 = prompt('Enter your name');
console.log(userInput6);
alert(`WELCOME ${userInput6}`);
