window.onclick = function(event)
{
    if (event.target.className == "dropdown-button")
    {
        console.log("[dropdown.js] Dropdown-button clicked");
    }
    else
    {
        console.log("[dropdown.js] Exited dropdown");
    }
}