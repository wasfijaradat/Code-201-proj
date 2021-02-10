"use strict";

let userInput8 = prompt("Enter your name");

console.log(userInput8);

alert(`WELCOME ${userInput8}`);

let score = 0;

// let array1 =['yes','no','y','n']
// for (let j = 0; j < 3; j++) {
    
    // for (let i = 0; i< array1.length; i++) {
    //     let userInput1= prompt('Are you a degree holder?');
    //     if (userInput1===array1[i]) {
    //         alert('good jop');
            
    //         break;
            
    //     }else{
    //        alert('try again')
          
    //     }
        
    // }

    
    
//}    


function q1() {
  let userInput1 = prompt("Are you a degree holder?");
  userInput1 = userInput1.toLowerCase(); //to convert every entry to lower case
  if (userInput1 === "y" || userInput1 === "yes") {
    /*the user entry is true*/ alert("that is great basically");
    score++;

  } else if (userInput1 === "no" || userInput1 === "no") {
    /*the user entry is flase*/ alert(
      "Unfortunately, you need to be a degree holder"
    );
  } /*the user entry doesnt match*/ else {
    alert("incorrect entry");
  }
  console.log(userInput1);
  return;
}
q1();

function q2() {
  let userInput2 = prompt("Would you love to learn programming?");
  userInput2 = userInput2.toLowerCase();
  if (userInput2 === "y" || userInput2 === "yes") {
    alert("Wonderful");
    score++;

  } else if (userInput2 === "n" || userInput2 === "no") {
    alert("Think about it from now onward");
  } else {
    alert("incorrect entry");
  }
  // console.log(userInput2);
  return;
}
q2();

function q3() {
  let userInput3 = prompt("Do you mind contacting you via email?");
  userInput3 = userInput3.toLowerCase();

  if (userInput3 === "y" || userInput3 === "yes") {
    alert("No problem, will reach you out via phone calls");
  } else if (userInput3 === "n" || userInput3 === "no") {
    alert("check your mail inbox to verify");
    score++;
  } else {
    alert("incorrect entry");
  }
  console.log(userInput3);
  return;
}
q3();

function q4() {
  let userInput4 = prompt("Do you have a laptop?");
  userInput4 = userInput4.toLowerCase();

  if (userInput4 === "y" || userInput4 === "yes") {
    alert("That will help much");
    score++;
  } else if (userInput4 === "n" || userInput4 === "no") {
    alert("get ready, have a laptop please");
  } else {
    alert("incorrect entry");
  }
  // console.log(userInput4);
  return;
}
q4();

function q5() {
  let userInput5 = prompt("Are you ready to join immediately?");
  userInput5 = userInput5.toLocaleLowerCase();
  if (userInput5 === "y" || userInput5 === "yes") {
    alert("Weclome onboard");
    score++;
  } else if (userInput5 === "n" || userInput5 === "no") {
    alert("take a tour in our site, will help to excite you for the course");
  } else {
    alert("incorrect entry");
  }
  return;
}
q5();

function q6() {

  for (let i = 0; i < 4; i++) {
    let userInput6 = prompt("Guess the no of courses we offer?");
    userInput6 = parseInt(userInput6);

    if (userInput6 === 10) {
      alert("great guess! it took you " + i + " trials");
      score++;
      console.log(i);
      break;
    } else if (userInput6 < 10) {
      alert("this is lower than what we offer");
    } else if (userInput6 > 10) {
      alert("this is higher than what we offer");
    } else {
      alert("wrong entry");
    }
    
  }
  alert("we offer 10 programming courses");
  return;
}
q6();

function q7() {

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

  let arrayAnsw = ["html", "javascript", "java", "php"];
  let falsy = false;

  for (let i = 0; i < 6; i++) {
    let userInput7 = prompt("Guess one of our top ranked courses");
    userInput7 = userInput7.toLowerCase();

    for (let j = 0; j < arrayAnsw.length; j++) {
      if (userInput7 === arrayAnsw[j]) {
        falsy = true;

        score++;

        alert(' good guess! you took '+ score +  ' correct answers ' );
        break;
      }
    }
    if (falsy === true) {
      break;
    }
  }
  return;
}
q7();
