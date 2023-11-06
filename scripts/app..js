
let btnChange4 = document.getElementById("btnChange4");
let affectMe4 = document.getElementById("affectMe4");

btnChange4.addEventListener("click", function(e) {
    affectMe4.innerText = "Event with Wicked CSS"
    affectMe4.className = "newStyle " + "spinner";
});