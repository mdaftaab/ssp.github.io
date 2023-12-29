var swiper = new Swiper(".serviceSwiper", {
	// loop: true,
	slidesPerView: 3.5,
	spaceBetween:20,
	// centeredSlides: true,
	// pagination: {
	//   el: ".swiper-pagination",
	//   clickable: true,
	// },
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".certificationSwiper", {
	loop: true,
	slidesPerView: 4,
	spaceBetween:20,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".patentsSwiper", {
	// loop: true,
	slidesPerView: 4,
	spaceBetween:20,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".timelineSwiper", {
	// loop: true,
	slidesPerView: 4,
	spaceBetween:0,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".innovationSwiper", {
    // loop: true,
    slidesPerView: 3.5,
    spaceBetween:20,
    // centeredSlides: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('#counter').waypoint(function() {
    // Counter animation code
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    }, { offset: '80%' });
}, { offset: '80%' });