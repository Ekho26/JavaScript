const myPass = document.querySelector('#password');
const myMsg = document.querySelector('.msg');

myPass.addEventListener('keydown', function() {

    if(myPass.value.length < 4) {
        myMsg.innerText = 'Too Short';
        myMsg.style.color = '#CCC';
    } else if(myPass.value.length < 5) {
        myMsg.innerText = 'Easily Cracked';
        myMsg.style.color = 'red';
        myPass.style.borderColor = '#4286F4'
    } else if(myPass.value.length < 6) {
        myMsg.innerText = 'Bit Weak';
        myMsg.style.color = 'lightblue';
    } else if(myPass.value.length < 7) {
        myMsg.innerText = 'Not Bad';
        myMsg.style.color = '#CCC';
    } else if(myPass.value.length < 8) {
        myMsg.innerText = 'Pretty Good';
        myMsg.style.color = 'green';
    } /* else if(myPass.value.lenght < ) {
        myMsg.innerText = 'Nice';
    } */
    // console.log(myPass.value.lenght);

    // Reset all form

    if(myPass.value.length == 0) {
        myMsg.innerText = '';
        myPass.style.borderColor = 'red';
    }
})