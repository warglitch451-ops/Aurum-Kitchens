// ==========================================
// AURUM KITCHENS - PREMIUM SCRIPT.JS
// ==========================================


// ===============================
// PAGE LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

            document.body.classList.add("loaded");

        },800);

    }

});




// ===============================
// MOBILE NAVBAR
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if(menuToggle && navLinks){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("open");

    });


    // Close menu after clicking link

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.classList.remove("active");

            menuToggle.classList.remove("open");

        });

    });

}




// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(header){

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    }


});




// ===============================
// ACTIVE NAV LINK
// ===============================

const currentPage = window.location.pathname.split("/").pop();


document.querySelectorAll(".nav-links a").forEach(link=>{


    const linkPage = link.getAttribute("href");


    if(linkPage === currentPage){

        link.classList.add("active");

    }


});




// ===============================
// SCROLL REVEAL ANIMATION
// ===============================


const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


            revealObserver.unobserve(entry.target);


        }


    });


},{

    threshold:0.15

});



revealElements.forEach(element=>{

    revealObserver.observe(element);

});




// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });


        }


    });


});




// ===============================
// BACK TO TOP BUTTON
// ===============================


const backTop = document.querySelector(".back-top");


window.addEventListener("scroll",()=>{


    if(backTop){


        if(window.scrollY > 500){

            backTop.classList.add("show");

        }

        else{

            backTop.classList.remove("show");

        }


    }


});



if(backTop){

    backTop.addEventListener("click",(e)=>{

        e.preventDefault();


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });

}
// ==========================================
// PORTFOLIO FILTER SYSTEM
// ==========================================


const filterButtons = document.querySelectorAll(".filter-buttons button");
const projectCards = document.querySelectorAll(".project-card");


if(filterButtons.length && projectCards.length){


    filterButtons.forEach(button=>{


        button.addEventListener("click",()=>{


            // Remove active class

            filterButtons.forEach(btn=>{

                btn.classList.remove("active");

            });


            // Add active class

            button.classList.add("active");


            const filterValue = button.textContent
            .trim()
            .toLowerCase();



            projectCards.forEach(card=>{


                const title = card
                .querySelector("h3")
                ?.textContent
                .toLowerCase();



                if(
                    filterValue === "all" ||
                    title?.includes(filterValue)
                ){


                    card.style.display="block";


                    setTimeout(()=>{

                        card.style.opacity="1";

                        card.style.transform="translateY(0)";

                    },50);


                }


                else{


                    card.style.opacity="0";

                    card.style.transform="translateY(20px)";


                    setTimeout(()=>{

                        card.style.display="none";

                    },300);


                }


            });


        });


    });


}




// ==========================================
// FAQ ACCORDION
// ==========================================


const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{


    const question = item.querySelector("h3");


    if(question){


        question.addEventListener("click",()=>{


            faqItems.forEach(other=>{


                if(other !== item){

                    other.classList.remove("active");

                }


            });


            item.classList.toggle("active");


        });


    }


});




// ==========================================
// CONTACT FORM EXPERIENCE
// ==========================================


const contactForm = document.querySelector(".contact-form form");


if(contactForm){


    contactForm.addEventListener("submit",(e)=>{


        e.preventDefault();


        const button = contactForm.querySelector("button");


        if(button){


            const oldText = button.innerHTML;


            button.innerHTML = "Sending Request...";


            button.disabled = true;



            setTimeout(()=>{


                button.innerHTML = "✓ Request Sent Successfully";


                contactForm.reset();



                setTimeout(()=>{


                    button.innerHTML = oldText;

                    button.disabled=false;


                },2500);



            },1500);


        }


    });


}




// ==========================================
// IMAGE LOAD ANIMATION
// ==========================================


const images = document.querySelectorAll("img");


images.forEach(image=>{


    image.addEventListener("load",()=>{


        image.classList.add("loaded");


    });


});




// ==========================================
// CARD TILT EFFECT (DESKTOP ONLY)
// ==========================================


const cards = document.querySelectorAll(
".service-card, .project-card, .review-card, .why-card"
);



cards.forEach(card=>{


    card.addEventListener("mousemove",(e)=>{


        if(window.innerWidth > 900){


            const rect = card.getBoundingClientRect();


            const x =
            e.clientX - rect.left;


            const y =
            e.clientY - rect.top;



            const rotateX =
            ((y - rect.height/2) / rect.height) * 8;



            const rotateY =
            ((x - rect.width/2) / rect.width) * -8;



            card.style.transform =
            `
            perspective(700px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;


        }


    });



    card.addEventListener("mouseleave",()=>{


        card.style.transform="";


    });


});




// ==========================================
// CURRENT YEAR AUTO UPDATE
// ==========================================


const year = document.querySelector(".copyright");


if(year){


    year.innerHTML =
    `© ${new Date().getFullYear()} Aurum Kitchens. All Rights Reserved.`;


}




// ==========================================
// DISABLE RIGHT CLICK ON IMAGES
// (Luxury portfolio protection)
// ==========================================


document.querySelectorAll("img").forEach(img=>{


    img.addEventListener("contextmenu",(e)=>{


        e.preventDefault();


    });


});

// ==========================================
// AURUM KITCHENS FINAL JAVASCRIPT POLISH
// ==========================================


// ===============================
// ANIMATED NUMBER COUNTERS
// ===============================


const counters = document.querySelectorAll(
".stat-card h2, .trust-item h2, .highlight-card h2"
);


const startCounter = (counter)=>{


    let text = counter.innerText;


    let number = parseFloat(
        text.replace(/[^0-9.]/g,"")
    );


    if(!number) return;


    let suffix = text.replace(/[0-9.]/g,"");


    let count = 0;


    let speed = number / 80;



    const update = ()=>{


        count += speed;


        if(count < number){


            counter.innerText =
            Math.ceil(count) + suffix;


            requestAnimationFrame(update);


        }


        else{


            counter.innerText =
            number + suffix;


        }


    };


    update();


};



const counterObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            startCounter(entry.target);


            counterObserver.unobserve(entry.target);


        }


    });


},{
    threshold:0.5
});



counters.forEach(counter=>{


    counterObserver.observe(counter);


});




// ===============================
// PARALLAX HERO EFFECT
// ===============================


const heroSections =
document.querySelectorAll(
".hero, .page-hero"
);



window.addEventListener("scroll",()=>{


    let scroll =
    window.pageYOffset;



    heroSections.forEach(hero=>{


        const imagePosition =
        scroll * 0.25;



        hero.style.backgroundPosition =
        `center ${imagePosition}px`;


    });


});




// ===============================
// BUTTON RIPPLE EFFECT
// ===============================


const buttons =
document.querySelectorAll(
".btn, .quote-btn"
);



buttons.forEach(button=>{


    button.addEventListener("click",(e)=>{


        const ripple =
        document.createElement("span");


        const rect =
        button.getBoundingClientRect();



        ripple.style.left =
        `${e.clientX - rect.left}px`;


        ripple.style.top =
        `${e.clientY - rect.top}px`;



        ripple.className =
        "ripple";


        button.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },600);



    });


});




// ===============================
// LAZY LOADING IMAGES
// ===============================


const lazyImages =
document.querySelectorAll(
"img[data-src]"
);



const imageObserver =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const img =
            entry.target;


            img.src =
            img.dataset.src;



            img.removeAttribute(
            "data-src"
            );



            imageObserver.unobserve(img);


        }


    });


});



lazyImages.forEach(img=>{


    imageObserver.observe(img);


});




// ===============================
// ESCAPE KEY CLOSE MENU
// ===============================


document.addEventListener(
"keydown",
(e)=>{


    if(e.key==="Escape"){


        if(navLinks){

            navLinks.classList.remove("active");

        }


        if(menuToggle){

            menuToggle.classList.remove("open");

        }


    }


});




// ===============================
// PREVENT EMPTY FORM SUBMISSION
// ===============================


const forms =
document.querySelectorAll("form");


forms.forEach(form=>{


    form.addEventListener(
    "submit",
    (e)=>{


        const inputs =
        form.querySelectorAll(
        "input[required]"
        );


        let valid = true;



        inputs.forEach(input=>{


            if(input.value.trim()===""){


                valid=false;


                input.classList.add(
                "error"
                );


            }


            else{


                input.classList.remove(
                "error"
                );


            }


        });



        if(!valid){


            e.preventDefault();


        }


    });


});




// ===============================
// PAGE READY CLASS
// ===============================


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
    "page-ready"
    );


});



// ==========================================
// END OF AURUM KITCHENS SCRIPT.JS
// ==========================================



