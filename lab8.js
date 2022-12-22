function showDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-RU');
}

window.addEventListener('load', showDate);