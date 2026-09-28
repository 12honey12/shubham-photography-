/* ==========================================
   SHUBHAM PHOTOGRAPHY - JAVASCRIPT
========================================== */

/* 1. OWNER WHATSAPP NUMBER */

const OWNER_WHATSAPP = "918875618913";


/* 2. OPEN WHATSAPP FUNCTION */

function openWhatsApp(message) {
    const url =
        "https://wa.me/" +
        OWNER_WHATSAPP +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}


/* 3. FLOATING WHATSAPP BUTTON */

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
    whatsappButton.addEventListener("click", function (event) {
        event.preventDefault();

        openWhatsApp(
            "Hello Shubham Photography! Mujhe photography ke baare mein information chahiye."
        );
    });
}


/* 4. FOOTER WHATSAPP BUTTON */

const footerWhatsApp = document.getElementById("footerWhatsApp");

if (footerWhatsApp) {
    footerWhatsApp.addEventListener("click", function (event) {
        event.preventDefault();

        openWhatsApp(
            "Hello Shubham Photography! Main aapki photography services ke baare mein jaanna chahta/chahti hoon."
        );
    });
}


/* 5. BOOKING FORM */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name =
            document.getElementById("name")?.value.trim() || "";

        const mobile =
            document.getElementById("mobile")?.value.trim() || "";

        const service =
            document.getElementById("service")?.value || "";

        const eventDate =
            document.getElementById("eventDate")?.value || "";

        const location =
            document.getElementById("location")?.value.trim() || "";

        const requirement =
            document.getElementById("requirement")?.value.trim() || "";

        if (!name || !mobile || !service) {
            alert("Please name, mobile number aur service fill karein.");
            return;
        }

        const message = `
Hello Shubham Photography!

Mujhe photography booking ke liye inquiry karni hai.

Name: ${name}
Mobile: ${mobile}
Service: ${service}
Event Date: ${eventDate || "Not decided"}
Event Location: ${location || "Not mentioned"}

Additional Details:
${requirement || "No additional details"}

Please mujhe package aur availability ke baare mein batayein.
        `;

        openWhatsApp(message);
    });
}


/* 6. MOBILE NAVIGATION MENU */

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen =
            navLinks.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );
    });


    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        });

    });
}


/* 7. NAVBAR SCROLL EFFECT */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }
}

window.addEventListener(
    "scroll",
    updateNavbar
);

updateNavbar();


/* 8. GALLERY FILTER */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filterValue = (
            button.dataset.filter ||
            button.textContent.trim().toLowerCase()
        ).toLowerCase();


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        galleryItems.forEach(function (item) {

            const category = (
                item.dataset.category || ""
            ).toLowerCase();


            if (
                filterValue === "all" ||
                filterValue === "all photos" ||
                category === filterValue
            ) {

                item.style.display = "";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* 9. FAQ OPEN / CLOSE */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach(function (item) {

    const question =
        item.querySelector(".faq-question");


    if (!question) return;


    question.addEventListener("click", function () {

        const wasActive =
            item.classList.contains("active");


        faqItems.forEach(function (otherItem) {

            otherItem.classList.remove("active");

            const otherQuestion =
                otherItem.querySelector(".faq-question");


            if (otherQuestion) {

                otherQuestion.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });


        if (!wasActive) {

            item.classList.add("active");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});


/* 10. SCROLL REVEAL ANIMATION */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("show");

    });

}


/* 11. CURRENT YEAR */

const yearElement =
    document.getElementById("currentYear");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ==========================================
   WEBSITE READY
========================================== */

console.log(
    "Shubham Photography website is ready!"
);