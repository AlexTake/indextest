const button = document.querySelector('button');

button.addEventListener('click', event => {
    document.getElementById('id1').style.color = window.Telegram.WebApp.themeParams.bgColor;
});

button.addEventListener('click', event => {
    document.getElementById('id2').style.color = 'red';
});