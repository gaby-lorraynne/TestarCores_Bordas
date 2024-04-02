let content_box = document.getElementById('content-box');
let input = document.querySelector('input');

input.addEventListener('input', () => {
    let value = input.value;
    content_box.style.borderRadius = value;
    content_box.style.background = value;
    content_box.style.boxShadow = value;
});