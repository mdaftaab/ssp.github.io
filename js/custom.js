var swiper = new Swiper(".certificationSwiper", {
	loop: true,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
    }
});

var swiper = new Swiper(".patentsSwiper", {
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
    }
});

var swiper = new Swiper(".timelineSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
    }
});

var swiper = new Swiper(".innovationSwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
    }
});

var swiper = new Swiper(".counterSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
    }
});

var swiper = new Swiper(".serviceSwiper", {
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
    }
});


// Counter animation code
var counterAnimated = false;

$(window).on('scroll', function() {
    if (!counterAnimated && isElementInViewport($('#counter'))) {
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
        });
        counterAnimated = true; // Set the flag to true after the animation is triggered
    }
});

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}


// ---------- SideBar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

jQuery(document).ready(function () {
    setTimeout(function () {
      jQuery('#myPopup').modal('show');
    }, 0);
});