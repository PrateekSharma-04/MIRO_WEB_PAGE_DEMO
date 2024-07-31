function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '0'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.right = '-100%'
}

window.addEventListener('mouseup', function(event) {
    const sidebar = document.querySelector('.sidebar');
    if (event.target != sidebar) {
        sidebar.style.right = '-100%';
    }
})