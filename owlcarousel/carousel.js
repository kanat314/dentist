$(document).ready(function() {
    $(".owl-carousel").each(function() {
        var o = $(this).data("margin"),
            t = $(this).data("tablet"),
            a = $(this).data("mobile");
        $(this).owlCarousel({
            items: 3,
            loop: !0,
            margin: o,
            autoplay: !1,
            autoplayTimeout: 2500,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: a
                },
                600: {
                    items: t
                },
                1300: {
                    items: 3
                }
            }
        }), $(".play").on("click", function() {
            owl.trigger("play.owl.autoplay", [1e3])
        }), $(".stop").on("click", function() {
            owl.trigger("stop.owl.autoplay")
        })
    })
});