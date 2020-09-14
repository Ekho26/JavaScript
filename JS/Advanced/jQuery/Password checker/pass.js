const myPass = document.querySelector('#password');
const myMsg = document.querySelector('.msg');

myPass.addEventListener('keydown', function() {

    if(myPass.value.length < 3) {
        myMsg.innerText = 'Minimum 4';
        myMsg.style.color = '#CCC';
        myPass.style.borderColor = '#c1cec2'
    } else if(myPass.value.length < 5) {
        myMsg.innerText = 'Too Short';
        myMsg.style.color = '#CCC';
        myPass.style.borderColor = '#fd0505'
    } else if(myPass.value.length < 6) {
        myMsg.innerText = 'Easily Cracked';
        myMsg.style.color = 'red';
        myPass.style.borderColor = '#fda605'
    } else if(myPass.value.length < 7) {
        myMsg.innerText = 'Bit Weak';
        myMsg.style.color = 'lightblue';
        myPass.style.borderColor = '#fdd805'
    } else if(myPass.value.length < 8) {
        myMsg.innerText = 'Not Bad';
        myMsg.style.color = '#CCC';
        myPass.style.borderColor = '#b3fd05'
    } else if(myPass.value.length < 9) {
        myMsg.innerText = 'Pretty Good';
        myMsg.style.color = 'green';
        myPass.style.borderColor = '#079112'
    } /* else if(myPass.value.lenght < ) {
        myMsg.innerText = 'Nice';
    } */
    // console.log(myPass.value.lenght);

    // Reset all form

    if(myPass.value.length == 0) {
        myMsg.innerText = '';
        myPass.style.borderColor = '#c1cec2';
    }
})