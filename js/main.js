let contactRef = firebase.database().ref().child("contactForm");

document.getElementById("formdata").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = getInputVal("name");
  let email = getInputVal("email");
  let number = getInputVal("number");
  let subject = getInputVal("subject");
  let message = getInputVal("message");

  saveForm(name, email, number, subject, message);

  document.getElementById("formdata").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveForm(name, email, number, subject, message) {
  let newContactRef = contactRef.push();
  newContactRef.set({
    Name: name,
    Email: email,
    Number: number,
    Subject: subject,
    Message: message,
  });
}

(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);
