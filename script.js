const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
button.addEventListener('click', function(item) {

    if (item.target.id === 'pink'){
        body.style.backgroundColor = item.target.id;
    }

    if (item.target.id === 'black'){
        body.style.backgroundColor = item.target.id;
    }

    if (item.target.id === 'red'){
        body.style.backgroundColor = item.target.id;
    }

    if (item.target.id === 'yellow'){
        body.style.backgroundColor = item.target.id;
    }
    
});   

});
