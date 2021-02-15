'use strict'
let userName = prompt ('What is your name?');
  alert ('We are glad to have you  ' +  userName);

let courseCompletion = prompt ('Do you think i will finish this course?');
// console.log(courseCompletion); 

courseCompletion= courseCompletion.toLowerCase()

if(courseCompletion == 'yes'  || courseCompletion == 'y') {
    alert('Thank you for your good expectation');
}   
else { 
    alert ('Ohh, why do you think that!!');
}

let gamingLove = prompt ('Do you think i enjoy gaming?'); 
// console.log(gamingLove);

if(gamingLove.toLowerCase() == 'yes' || gamingLove.toLowerCase() == 'y') {
    alert('You are so mistaken');
}   
else { 
    alert('i am glad you had that right');
}

let firstImp = prompt ('Did i leave a good first impression?'); 
// console.log(firstImp);

if(firstImp.toLowerCase() == 'yes' || firstImp.toLowerCase() == 'y') {
    alert('Glad to hear that, it was mutual');
}   
else {
    alert('sorry to hear that, where did i go wrong?');
}

let myPhobia = prompt ('To your knowledge do i have any phobias?'); 
// console.log(myPhobia); 

if(myPhobia.toLowerCase() == 'yes' || myPhobia.toLowerCase() == 'y') {
    alert('Intersting, how did you know?');
}   
else {
    alert('Unfortunately not true');
}

let tryNew = prompt('Do i like to try new things?'); 
// console.log(tryNew);

if (tryNew.toLowerCase()== 'yes' || tryNew.toLowerCase()== 'y') {
    alert('you got that right');
}   
else {
    alert('how else can we learn!');
}







