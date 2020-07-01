let background1path = 'https://images.pexels.com/photos/4275561/pexels-photo-4275561.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
let background2path = 'https://images.pexels.com/photos/1607855/pexels-photo-1607855.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
let background3path = 'https://images.pexels.com/photos/1702624/pexels-photo-1702624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

/*let background = document.body.style.background; /*not working*/
document.body.style.backgroundImage = "url(" + background1path + ")";

let button = document.querySelector('button');

const changeCourt = () => {
    console.log(document.body.style.backgroundImage)
    console.log('url("' + background1path + '")')
    if (document.body.style.backgroundImage === 'url("' + background1path + '")') {
        button.style.border = '3px solid #8fbe70';
        button.style.color = '#8fbe70';
        button.style.backgroundColor = '';
        document.body.style.backgroundImage = "url(" + background2path + ")";
        document.body.style.backgroundPosition = '0% 70%';
        document.querySelector('h1').style.mixBlendMode = 'normal';
        document.querySelector('h1').style.color = 'hsla(166, 65%, 6%, 0.77)';
        document.querySelector('b').style.color = 'rgba(96, 158, 99, 0.48)';
        document.getElementById('details').style.borderColor = 'white';
        document.getElementById('info').style.color = 'white';
        document.querySelector('ul').style.color = 'white';
    } else if (document.body.style.backgroundImage === 'url("' + background2path + '")') {
        button.style.border = '3px solid #ff0099';
        button.style.color = '#ff0099';
        button.style.backgroundColor = '';
        document.body.style.backgroundImage = "url(" + background3path + ")";
        document.body.style.backgroundPosition = 'initial';
        document.querySelector('h1').style.color = 'rgba(130, 140, 212, 0.7)';
        document.querySelector('b').style.color = 'rgba(255, 0, 141, 0.8)';
        document.getElementById('details').style.backdropFilter = 'blur(20px)';
    } else if (document.body.style.backgroundImage === 'url("' + background3path + '")') {
        button.style.border = '3px solid #f04d42';
        button.style.color = '#f04d42';
        button.style.backgroundColor = '';
        document.body.style.backgroundImage = "url(" + background1path + ")";
        document.body.style.backgroundPosition = 'center';
        document.querySelector('h1').style.color = 'hsla(209, 12%, 58%, 0.7)';
       /* document.querySelector('h1').style.mixBlendMode = 'multiply';*/
        document.querySelector('b').style.color = 'rgba(48, 53, 58, 0.7)';
        document.getElementById('details').style.borderColor = 'hsla(209, 12%, 40%, 1)';
        document.getElementById('info').style.color = 'hsla(209, 12%, 40%, 1)';
        document.querySelector('ul').style.color = 'hsla(209, 12%, 40%, 1)';
        document.getElementById('details').style.backdropFilter = 'blur(8px)';

    }
    console.log("KOLOR:" + button.style.backgroundColor)
}

/*
const changeButtonColor = () => {    
        button.style.backgroundColor = 'hsla(209, 12%, 40%, .5)';
        button.style.color = 'white';
        button.style.borderColor = 'White';
        button.innerText = 'Text 2';     
}
*/
/*
const changeBackground = () => {
    document.body.style.backgroundImage = "url("+background2path+")";
}
*/

button.onclick = changeCourt;
/*document.body.onclick = changeBackground;*/

button.addEventListener('mouseover', () => {
    button.style.color = 'white';
    if (document.body.style.backgroundImage === 'url("' + background1path + '")') {
        button.style.backgroundColor = '#f04d42';
    } else if (document.body.style.backgroundImage === 'url("' + background2path + '")') {
        button.style.backgroundColor = '#8fbe70';
    } else if (document.body.style.backgroundImage === 'url("' + background3path + '")') {
        button.style.backgroundColor = '#ff0099';
    };
})

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '';
    if (document.body.style.backgroundImage === 'url("' + background1path + '")') {
        button.style.color = '#f04d42';
    } else if (document.body.style.backgroundImage === 'url("' + background2path + '")') {
        button.style.color = '#8fbe70';
    } else if (document.body.style.backgroundImage === 'url("' + background3path + '")') {
        button.style.color = '#ff0099';
    };
})