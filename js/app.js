'use strict'
let userInput1 = prompt('Are you a degree holder?');
userInput1 = userInput1.toLowerCase(); //to convert every entry to lower case 
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
console.log(userInput3);

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


let score6=0;
for (let i = 0; i < 4; i++) {
    let userInput6 = prompt('Guess the no of courses we offer?');
    userInput6 = parseInt(userInput6);


    if (userInput6 === 10) {
        alert('great guess! it took you ' + i + ' trials');
        console.log(i);
        break

    }

    else if (userInput6 < 10) {
        alert('this is lower than what we offer');
    }
    else if (userInput6 > 10) {
        alert('this is higher than what we offer');
    }

    else {
        alert('wrong entry');
    }
    score6++
}
alert('we offer 10 programming courses');

/*trial no 1 before the TA helped me out with thw for looping way*/

// let userInput7=prompt('Guess one of our to top ranked courses');
// let arrayAnsw=['html', 'javascript', 'java', 'php'];
// userInput7=userInput7.toLowerCase();
// let index;

// for(index=0; index<6; index++){



//     if (userInput7===arrayAnsw[0] || userInput7===arrayAnsw[1] || userInput7===arrayAnsw[2] || userInput7===arrayAnsw[3]){

//         alert('great guess! it took you '+ index + ' trials');
//         document.write(index + 'trials for question 7');
//         console.log(index);
//         break;
//     }


//     else {
//        alert('you could not guess one of them correctly, Thank you'); 
//        userInput7=prompt('Guess one of our to top ranked courses');
//        userInput7=userInput7.toLowerCase();
//     }
// }


/*trials to have guessing trials without using if statement, TA Hidaya demo*/

let arrayAnsw = ['html', 'javascript', 'java', 'php']
let falsy = false;

for (let i = 0; i < 6; i++) {
    let userInput7 = prompt('Guess one of our top ranked courses');
    userInput7 = userInput7.toLowerCase();

    for (let j = 0; j < arrayAnsw.length; j++) {
        if (userInput7 === arrayAnsw[j]) {
            falsy = true
          
            score6++
            alert('good guess! you took ' + score + ' to guess');
            break
        }
    }
    if (falsy === true) {
        break
    }
}


let userInput8 = prompt('Enter your name');
console.log(userInput8);
alert(`WELCOME ${userInput8}`);


