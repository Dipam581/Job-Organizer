// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner();


//     // Initiate the wowjs
//     new WOW().init();


//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.sticky-top').css('top', '0px');
//         } else {
//             $('.sticky-top').css('top', '-100px');
//         }
//     });


//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });


//     // Header carousel
//     $(".header-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1500,
//         items: 1,
//         dots: true,
//         loop: true,
//         nav : true,
//         navText : [
//             '<i class="bi bi-chevron-left"></i>',
//             '<i class="bi bi-chevron-right"></i>'
//         ]
//     });


//     // Testimonials carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1000,
//         center: true,
//         margin: 24,
//         dots: true,
//         loop: true,
//         nav : false,
//         responsive: {
//             0:{
//                 items:1
//             },
//             768:{
//                 items:2
//             },
//             992:{
//                 items:3
//             }
//         }
//     });

// })(jQuery);

console.log("hola++++")
console.log("from")

var applyButtons = document.querySelectorAll('.applyLink-btn');
var applyButtons = document.querySelectorAll('.applyLink-btn');
console.log(applyButtons)

// Add click event listener to each apply button
applyButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the job listing URL
        var jobUrl = this.getAttribute('href');

        // Fetch the job listing page to get the apply link
        fetch(jobUrl)
            .then(response => response.text())
            .then(data => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(data, 'text/html');
                console.log(doc)
                var applyLink = doc.querySelector('apply-link-selector').getAttribute('href'); // Replace 'apply-link-selector' with the actual selector

                // Redirect to the apply link
                window.location.href = applyLink;
            })
            .catch(error => {
                console.error('Error fetching job listing:', error);
            });
    });
});