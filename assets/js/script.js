// banner circle
$(document).ready(function() {
    var r = Raphael("holder", "100%", "500");
        circX = $('#outerWrapper').width() / 2,
        circY = $('#outerWrapper').height() / 1,
        scrollAmount = 0,
        textOffset = 60;

    var radii = [-600, -500, -400, -300, -200, -100, 0, 100, 200, 300],
        circles = r.set(),
        text = r.set();

    circles.push(
        r.circle(circX, circY, radii[9]).attr({ fill: "#55009F" }),
        r.circle(circX, circY, radii[8]).attr({ fill: "#55009F" }),
        r.circle(circX, circY, 0).attr({ fill: "#55009F" }),
        r.circle(circX, circY, 0).attr({ fill: "#55009F" }),
        r.circle(circX, circY, 0).attr({ fill: "#55009F" }),
        r.circle(circX, circY, 0).attr({ fill: "#FFFFFF" })
    ).attr({ 'stroke-width': 0, opacity: '.2' });

    function moveCircles(x) {
        for (let i = 0; i < circles.length; i++) {
            const p = (circles.length - 1) - i;
            if ((x + radii[i]) <= 0) {
                circles[p].attr({ r: 0 });
            } else if ((x + radii[i]) >= 430) {
                circles[p].attr({ r: 430 });
            } else {
                circles[p].animate({ r: (x + radii[i]) });
            }
        }

        for (let i = 0; i < text.length; i++) {
            const q = (radii.length - 1) - i;
            text[i].animate({
                y: (circY - ((x + radii[q]) - textOffset)),
                "font-size": (circles[i].attr('r') / 10),
                opacity: Math.min(1, Math.max(0, circles[i].attr('r') / 200))
            });
        }
    }

    $('#outerWrapper').on('scroll', function() {
        scrollAmount = $(this).scrollTop();
        moveCircles(scrollAmount);
    });

    $('#zoomIn').on('click', function(e) {
        e.preventDefault();
        if (scrollAmount < 700) {
            $('#outerWrapper').animate({ scrollTop: (scrollAmount += 100) }, 'slow');
        }
    });

    $('#zoomOut').on('click', function(e) {
        e.preventDefault();
        if (scrollAmount > 0) {
            $('#outerWrapper').animate({ scrollTop: (scrollAmount -= 100) }, 'slow');
        }
    });
});


// split text
document.addEventListener("DOMContentLoaded", function () {
    const paragraph2 = document.getElementById("splitText2");
    const words2 = paragraph2.innerHTML.split(" "); 
    paragraph2.innerHTML = words2.map(word => `<span class="word2">${word}</span>`).join(" ");

    // GSAP Animation
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".word2", {
        opacity: 0.3,
        y: 20,
        stagger: 0.1, 
        duration: 0.5,
        scrollTrigger: {
            trigger: "#textSection2",
            start: "center center",
            end: "+=150%",
            scrub: true,
            pin: true
        }
    });
});

// client carousel
$('.client-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    375: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    }
  }
});
