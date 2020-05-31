$(function () {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
        if ($(".timeline-content").hasClass("js--fadeInLeft")) {
            $(".timeline-content")
                .removeClass("js--fadeInLeft")
                .addClass("js--fadeInRight");
        }

        sr.reveal(".js--fadeInRight", {
            origin: "right",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800
        });
    } else {
        sr.reveal(".js--fadeInLeft", {
            origin: "left",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800
        });

        sr.reveal(".js--fadeInRight", {
            origin: "right",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800
        });
    }

    sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800
    });

    sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800
    });
});


/* SKILLS */

$(function () {


    //create instance
    $('.chart').easyPieChart({
        scaleColor: "transparent",
        lineWidth: 5,
        lineCap: "round", //Can be butt
        barColor: "orange",
        trackColor: "#555",
        size: 180,
        rotate: 0,
        animate: 3000,
        // animate the numbers
        onStep: function (value) {
            this.$el.find('.per').text(Math.round(value));
        },
        onStop: function (value, to) {
            this.$el.find('.per').text(Math.round(to));
        }
    });



});

/* SKILLS Ending*/

/* Skills2 Starting */
var lang = {
    html: "90%",
    css: "90%",
    javascript: "70%",
    php: "80%",
    angular: "65%",
    python: "70%",
    java: "60%",
    c: "80%",
    photoshop: "90%"
};

var multiply = 4;

$.each(lang, function (language, pourcent) {
    var delay = 700;

    setTimeout(function () {
        $("#" + language + "-pourcent").html(pourcent);
    }, delay * multiply);

    multiply++;
});
/*  Skills2 Ending */