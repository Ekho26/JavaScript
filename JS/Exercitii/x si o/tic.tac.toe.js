document.querySelectorAll('td')
        .forEach(cell => cell.addEventListener('click', onClick));

var simbol = 'X';

function onClick(event) {
    let cell = event.target;
    cell.removeEventListener('click', onClick);
    cell.innerText = simbol;
    simbol = simbol == 'X' ? '0' : 'X';
}