const sidebar = document.getElementById('sidebar');

document.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    if (mouseX < 50) {
        sidebar.classList.add('show');
    } else {
        sidebar.classList.remove('show');
    }
});
