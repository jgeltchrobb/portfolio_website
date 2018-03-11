
function port_slider() {
    document.getElementById('port_container').classList.toggle('port_shown'); 
    
    if (about_container.classList.contains("about_shown")) {
        about_container.classList.remove("about_shown");
    }
    
    if ((about_container.classList.contains("about_shown")) || (port_container.classList.contains("port_shown"))) {
        document.getElementById('container').classList.add('blurred');
    } else (document.getElementById('container').classList.remove('blurred'));

};

function about_slider() {
    document.getElementById('about_container').classList.toggle('about_shown');

    if (port_container.classList.contains("port_shown")) {
        port_container.classList.remove("port_shown");
    }
    if ((about_container.classList.contains("about_shown")) || (port_container.classList.contains("port_shown"))) {
        document.getElementById('container').classList.add('blurred');
    } else (document.getElementById('container').classList.remove('blurred'));
};