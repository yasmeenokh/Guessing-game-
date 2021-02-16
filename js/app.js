'use strict';
let counter = 0; 
let userName = prompt('What is your name?');
alert('We are glad to have you  ' + userName);

let courseCompletion = prompt('Do you think i will finish this course?');
// console.log(courseCompletion); 

courseCompletion = courseCompletion.toLowerCase()

if (courseCompletion === 'yes' || courseCompletion === 'y') {
    alert('Thank you for your good expectation');
    counter++;
}

else {
    alert('Ohh, why do you think that!!');
}

let gamingLove = prompt('Do you think i enjoy gaming?');
// console.log(gamingLove);

if (gamingLove.toLowerCase() === 'yes' || gamingLove.toLowerCase() === 'y') {
    alert('You are so mistaken');
 
}
else {
    alert('i am glad you had that right');
    counter++;
}

let firstImp = prompt('Did i leave a good first impression?');
// console.log(firstImp);

if (firstImp.toLowerCase() === 'yes' || firstImp.toLowerCase() === 'y') {
    alert('Glad to hear that, it was mutual');
    counter++;
    
}
else {
    alert('sorry to hear that, where did i go wrong?');
}

let myPhobia = prompt('To your knowledge do i have any phobias?');
// console.log(myPhobia); 

if (myPhobia.toLowerCase() === 'yes' || myPhobia.toLowerCase() === 'y') {
    alert('Intersting, how did you know?');
    counter++;
}
else {
    alert('Unfortunately not true');
}

let tryNew = prompt('Do i like to try new things?');
// console.log(tryNew);

if (tryNew.toLowerCase() === 'yes' || tryNew.toLowerCase() === 'y') {
    alert('you got that right');
    counter++;
}
else {
    alert('how else can we learn!');
}

let myAge = prompt('How old do you think i am');


for (let i = 0; i < 3; i++) {
    if (myAge > 25) { 
        alert ( 'too high');
        myAge = prompt('How old do you think i am');
    }
     if (myAge < 25) {
        alert('too low , but thank you');
        myAge = prompt('How old do you think i am');
    }
}    if (myAge == 25) {
    alert ('good guess');
    counter++;
} 


let favFood = ['oriental', 'chinese','indian'] 
let favFoodAns = prompt ( 'what is my favourite type of food?'); 
for (let i = 0; i < 5; i++) {

if ( favFoodAns === favFood[0] || favFoodAns === favFood[1] || favFoodAns === favFood[2]) {
    alert ('correct');
    counter++; 
break; 

}

else { alert ( ' try again' )
 favFoodAns = prompt ( 'what is my favourite type of food?'); 

 
}} 

alert ( 'your score is ' + counter); 

