
$(document).ready(function () {
    $('.row').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: { enabled: true },
        removalDelay: 300,       // Delay in milliseconds before popup is removed
        mainClass: 'mfp-fade'   // Class that is added to popup wrapper and background
    });
});
