'use strict';
let counter = 0; 
function yourName()
{
let userName = prompt('What is your name?');
while (userName == null || userName == '') {
    userName = prompt("please enter your name");
};
alert('We are glad to have you  ' + userName +  ' 😀 ');
return userName; 
}
yourName(); 

const question1= function()
{
let courseCompletion = prompt('Do you think i will finish this course?');


courseCompletion = courseCompletion.toLowerCase()
while (courseCompletion !== 'yes' && courseCompletion !== 'y' && courseCompletion !=='no' && courseCompletion !=='n' ) {
    courseCompletion = prompt('Do you think i will finish this course?');
}

if (courseCompletion === 'yes' || courseCompletion === 'y') {
    alert('Thank you for your good expectation 😄');
    counter++;
}

if (courseCompletion === 'no' || courseCompletion === 'n') {
    alert('Ohh, why do you think that 😔!!');
return courseCompletion;
}};
question1(); 

const question2 =function()
{
let gamingLove = prompt('Do you think i enjoy gaming?');

while (gamingLove.toLowerCase() !== 'yes' && gamingLove.toLowerCase() !== 'y' && gamingLove.toLowerCase() !=='no' && gamingLove.toLowerCase() !=='n' ) {
    gamingLove = prompt('Do you think i enjoy gaming?');
}
if (gamingLove.toLowerCase() === 'yes' || gamingLove.toLowerCase() === 'y') {
    alert('You are so mistaken');
 
}
if (gamingLove.toLowerCase() === 'no' || gamingLove.toLowerCase() === 'n') {
    alert('i am glad you had that right');
    counter++;
    return gamingLove;
}};
question2();

const question3 = function()
{
let firstImp = prompt('Did i leave a good first impression?');

while (firstImp.toLowerCase() !== 'yes' && firstImp.toLowerCase() !== 'y' && firstImp.toLowerCase() !=='no' && firstImp.toLowerCase() !=='n' ) {
    firstImp = prompt('Did i leave a good first impression?');
}

if (firstImp.toLowerCase() === 'yes' || firstImp.toLowerCase() === 'y') {
    alert('Glad to hear that, it was mutual 🙈');
    counter++;
    
}
if (firstImp.toLowerCase() === 'no' || firstImp.toLowerCase() === 'n') {
    alert('sorry to hear that, where did i go wrong 💔?');
return firstImp;
}};
question3();

const question4 = function()
{
let myPhobia = prompt('To your knowledge do i have any phobias?');

while (myPhobia.toLowerCase() !== 'yes' && myPhobia.toLowerCase() !== 'y' && myPhobia.toLowerCase() !=='no' && myPhobia.toLowerCase() !=='n' ) {
    myPhobia = prompt('To your knowledge do i have any phobias?');
}

if (myPhobia.toLowerCase() === 'yes' || myPhobia.toLowerCase() === 'y') {
    alert('Intersting 🙀, how did you know?');
    counter++;
}
if (myPhobia.toLowerCase() === 'no' || myPhobia.toLowerCase() === 'n') {
    alert('Unfortunately not true');
return myPhobia;
}};
question4();

const question5 =function()
{
let tryNew = prompt('Do i like to try new things?');

while (tryNew.toLowerCase() !== 'yes' && tryNew.toLowerCase() !== 'y' && tryNew.toLowerCase() !=='no' && tryNew.toLowerCase() !=='n' ) {
    tryNew = prompt('Do i like to try new things?');
}
if (tryNew.toLowerCase() === 'yes' || tryNew.toLowerCase() === 'y') {
    alert('you got that right');
    counter++;
}
if (tryNew.toLowerCase() === 'no' || tryNew.toLowerCase() === 'n') {
    alert('how else can we learn!');
return tryNew;
}};
question5();

const question6 = function()
{
let myAge = prompt('How old do you think i am');

for (let i = 0; i < 3; i++) {
    if (myAge > 25) { 
        alert ( 'too high 😯');
        myAge = prompt('How old do you think i am');
    }
     if (myAge < 25) {
        alert('too low , but thank you 🙈');
        myAge = prompt('How old do you think i am');
    } 

}    

    if  (myAge == 25) {
    alert ('good guess');
    counter++; 

}
return myAge;
};
question6();

const question7 =function()
{
let favFood = ['oriental', 'chinese','indian'] 
let favFoodAns = prompt ( 'what is my favourite type of food?'); 
for (let i = 0; i < 5; i++) {

if ( favFoodAns === favFood[0] || favFoodAns === favFood[1] || favFoodAns === favFood[2]) {
    alert ('correct');
    counter++; 
break; 

}

else { alert ( ' try again' )
 favFoodAns = prompt ( 'what is my favourite type of food?');}
return favFoodAns;
}};

question7();

alert ( 'your score is ' + counter)