function toggle_dark_mode(){
    let is_dark_mode = localStorage.getItem("dark_mode")
    if (is_dark_mode == 'true') {
        is_dark_mode = false
    }   else {
        is_dark_mode = true
    }
    localStorage.setItem("dark_mode", is_dark_mode)
    document.querySelector('header').classList.toggle("head-mode", is_dark_mode)
    document.querySelector('main').classList.toggle("main-mode", is_dark_mode)
    document.querySelector('footer').classList.toggle("footer-mode", is_dark_mode)
}

let button = document.querySelector(".button")
button.addEventListener('click', toggle_dark_mode)