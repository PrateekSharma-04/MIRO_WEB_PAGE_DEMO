window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "55px";
    } else {
        document.getElementById("header").style.height = "90px";
    }
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '0'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '-100%'
}

window.addEventListener('mouseup', function (event) {
    const sidebar = document.querySelector('.sidebar');
    if (event.target != sidebar) {
        sidebar.style.right = '-100%';
    }
})