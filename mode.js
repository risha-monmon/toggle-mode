
function toggle() {
    var header = document.getElementById('header');
    var checkbox = document.querySelector('.checkbox');
  

    if (checkbox.checked) {
        header.textContent = ' Light mode';
        header.style.color = "#000";
       
    } else {
        header.textContent = 'Dark mode';
        header.style.color="#fff"
    }
}
