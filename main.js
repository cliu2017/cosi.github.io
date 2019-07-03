var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/cocosisi4.png') {
        myImage.setAttribute ('src','images/cocosisi5.png');
    }
        else {
            myImage.setAttribute ('src','images/cocosisi4.png')
        }
    
    }

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Miao Miao Miao, Hello ' + myName +'!';
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Miao Miao Miao, Hello ' + storedName +'!';
}

myButton.onclick = function() {
    setUserName();
}