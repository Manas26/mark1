$(function () {
    $(".typer").typed({
        strings: ["Developer", "Designer", "Photographer"],
        typeSpeed: 180,
        contentType: 'html',
        loop: true
    });
});


function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 780;
        }
        document.getElementById("result").innerHTML = localStorage.clickcount;
    }
};