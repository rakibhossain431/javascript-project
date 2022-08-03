// Featured Products section start

$('.slide-itmes').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});

// Featured Products section end


// Featured Products section start

$('.featured-product-slid').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,

})

// Featured Products section end


// Checkout section start

$(document).ready(function () {
    $(".del-btn").on("click", function () {
        // alert('dhfjgdfgdfg');
        console.log($(this).parents());
        $(this).parents('#check-out').addClass('hidden-cart');
    });
});

// Checkout section end


// cart section start
$(document).ready(function () {
    $("#shopping-remove").on("click", function () {
        // alert('dhfjgdfgdfg');
        console.log($(this).parents());
        $(this).parents(tr).addClass('del');
    });
});

// cart section end


// increment and decrement quantity section start

$(document).ready(function () {
    const minus = $('.qtyminus');
    const plus = $('.qtyplus');
    minus.click(function (e) {
        e.preventDefault();
        const input = $(this).closest(".shopping-qty").find("#quantity");
        var value = input.val();
        if (value > 1) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        const input = $(this).closest(".shopping-qty").find("#quantity");
        var value = input.val();
        value++;
        input.val(value);
    })
});

// increment and decrement quantity section end


// increment and decrement quantity section start

$(document).ready(function () {
    const minus = $('.qtyminus');
    const plus = $('.qtyplus');
    minus.click(function (e) {
        e.preventDefault();
        const input = $(this).closest(".quentity-option").find("#quantity");
        var value = input.val();
        if (value > 0) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        const input = $(this).closest(".quentity-option").find("#quantity");
        var value = input.val();
        value++;
        input.val(value);
    })
});

// increment and decrement quantity section end



// main slider section start
$('.related-product-slide').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})
// main slider section start

// testimonial section start
$(document).ready(function () {

    $('#testimonial').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

});
// testimonial section start