window.onclick = function (event) 
{
    var dropdown = document.getElementsByClassName('dropdown-container');
    if (event.target.className == "dropdown-button") {
        dropdown[0].style.display = "flex";
    }
    else {
        dropdown[0].style.display = "none";
    }

    var chat = document.getElementsByClassName('support-chat');
    var current = window.getComputedStyle(chat[0]);
    var display = current.getPropertyValue('display');

    if (event.target.className == "s-btn") {

        if (display == "none") {
            chat[0].style.display = "flex";
        }
        else {
            chat[0].style.display = "none";
        }
    }
    else if (event.target.className == "close-support-chat") {
        chat[0].style.display = "none";
    }
}