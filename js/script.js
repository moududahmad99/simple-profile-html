const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const links = document.querySelectorAll('.sidebar-links li');


toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});