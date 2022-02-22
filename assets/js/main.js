
let options = document.getElementById('farbeAuswahlen');

let button = document.querySelector('button');

button.addEventListener('click', function () {
    event.preventDefault();
    console.log(options.value);
    let color = options.value.replace(' ', '');
    color = color.toLocaleLowerCase();
    console.log(color);
    console.log('test');
    document.body.style.backgroundColor = `${color}`;
})