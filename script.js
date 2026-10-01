function showMenu() {
    let menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
}

function changeTheme() {
    document.body.classList.toggle("dark");

    let themeBtn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
}
/* ================= CLOSE MOBILE MENU ================= */

let navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("show");

    });

});